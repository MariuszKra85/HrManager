import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import UserView from './UserView';

const OverviewUsers = (props) => {
  console.log(props);

  return (
    <div>
      {props.users &&
        props.users.map((user) => {
          let tasks = [];

          props.tasks &&
            props.tasks.filter((task) => {
              task.whoIncluded.forEach((e) => {
                if (e === user.id) {
                  return tasks.push(task);
                }
              });
            });
          let tasksDone = [];
          props.tasksDone &&
            props.tasksDone.filter((task) => {
              if (task.whoDone === user.id) {
                return tasksDone.push(task);
              }
            });
          let tasksTotal = props.tasks.length + props.tasksDone.length;
          console.log(tasksTotal);
          return (
            <UserView
              name={user.name}
              task={tasks}
              tasksDone={tasksDone}
              tasksTotal={tasksTotal}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
    tasksDone: state.firestore.ordered.taskdone,
    tasks: state.firestore.ordered.tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tasks' }]),
  firestoreConnect([{ collection: 'taskdone' }]),
  firestoreConnect([{ collection: 'users' }])
)(OverviewUsers);
