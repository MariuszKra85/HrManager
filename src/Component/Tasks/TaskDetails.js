import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TaskDetails = (props) => {
  const { task, taskDone } = props;
  if (task) {
    return (
      <div>
        <h3>{task.name}</h3>
        <p>{task.content}</p>
      </div>
    );
  } else if (taskDone) {
    return (
      <div>
        <h3>{taskDone.name}</h3>
        <p>{taskDone.content}</p>
      </div>
    );
  } else {
    return <div> Loding Details...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  let task = state.firestore.data.tasks ? state.firestore.data.tasks[id] : null;
  let tasksDone = state.firestore.data.taskdone
    ? state.firestore.data.taskdone[id]
    : null;
  return {
    task: task,
    taskDone: tasksDone,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tasks' }]),
  firestoreConnect([{ collection: 'taskdone' }])
)(TaskDetails);
