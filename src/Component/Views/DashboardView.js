import React, { Component } from 'react';
import TaskList from '../Tasks/TasksList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class DashboardView extends Component {
  render() {
    if (this.props.auth) {
      return <div> You need to be login</div>;
    } else {
      return (
        <div>
          <TaskList></TaskList>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth.isEmpty,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tasks' }])
)(DashboardView);
