import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  deleteTask,
  signToTask,
  signOutTask,
} from '../../Store/Action/TaskAction';
const TasksList = (props) => {
  if (props.tasks) {
    const tasks = props.tasks;
    const users = props.users;
    const user = props.user;

    if (tasks.length === 0) {
      return <div> No Task for Today</div>;
    }

    return (
      <div>
        {tasks &&
          tasks.map((task) => {
            return (
              <TaskItem
                role={user ? user.role : null}
                title={task.name}
                content={task.content}
                key={task.id}
                id={task.id}
                deleteFun={props.deleteTask}
                signInToTask={props.signToTask}
                signOutToTask={props.signOutTask}
                whoIncluded={task.whoIncluded}
                initials={
                  task.whoIncluded &&
                  task.whoIncluded.map((taskID) => {
                    let initials =
                      users &&
                      users.map((user) => {
                        if (user.id === taskID) {
                          return user.initial;
                        } else {
                          return null;
                        }
                      });
                    return initials;
                  })
                }
              />
            );
          })}
      </div>
    );
  } else {
    return <div>Loding Tasks...</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile,
    tasks: state.firestore.ordered.tasks,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
    signToTask: (id) => dispatch(signToTask(id)),
    signOutTask: (id) => dispatch(signOutTask(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'tasks' }]),
  firestoreConnect([{ collection: 'users' }])
)(TasksList);
