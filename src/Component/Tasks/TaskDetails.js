import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TaskDetails = (props) => {
  const { task } = props;
  console.log(task);
  if (task) {
    return (
      <div>
        <h3>{task.name}</h3>
        <p>{task.content}</p>
      </div>
    );
  } else {
    return <div> Loding Details...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null;
  return {
    task: task,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tasks' }])
)(TaskDetails);
