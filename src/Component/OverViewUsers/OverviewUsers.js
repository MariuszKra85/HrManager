import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const OverviewUsers = (props) => {
  console.log(props);
  return <div>aaa</div>;
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
