import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteTask, editTask } from '../../Store/Action/TaskAction';
const TasksList = (props) => {
  if (props.tasks) {
    const tasks = props.tasks;
    const users = props.users;
    if (tasks.length === 0) {
      return <div> No Task for Today</div>;
    }
    console.log(props.users);
    return (
      <div>
        {tasks &&
          tasks.map((task) => {
            return (
              <TaskItem
                title={task.name}
                content={task.content}
                key={task.id}
                id={task.id}
                deleteFun={props.deleteTask}
                signInToTask={props.editTask}
                whoIncluded={task.whoIncluded}
                initials={
                  users &&
                  users.map((user) => {
                    if (user.id === task.whoIncluded) {
                      return user.initial;
                    } else {
                      return null;
                    }
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
  console.log(state);
  return {
    tasks: state.firestore.ordered.tasks,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
    editTask: (data) => dispatch(editTask(data)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'tasks' }]),
  firestoreConnect([{ collection: 'users' }])
)(TasksList);
