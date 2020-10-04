import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { signOutTask, taskDone } from '../../Store/Action/TaskAction';
import TaskItem from './TaskItem';

const MyTasks = (props) => {
  const myTasks = props.tasks;
  return (
    <div>
      {myTasks &&
        myTasks.map((task) => {
          let arrTasks = task.whoIncluded.map((e) => {
            if (e === props.user) {
              return (
                <TaskItem
                  title={task.name}
                  content={task.content}
                  key={task.id}
                  id={task.id}
                  signOutTask={props.signOutTask}
                  taskDone={props.taskDone}
                  ifdone={task.ifdone}
                />
              );
            } else return null;
          });
          return arrTasks;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.firebase.auth.uid,
    tasks: state.firestore.ordered.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOutTask: (id) => dispatch(signOutTask(id)),
    taskDone: (id) => dispatch(taskDone(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'tasks' }])
)(MyTasks);
