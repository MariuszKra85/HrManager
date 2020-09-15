import React, { Component } from 'react';
import TaskList from '../Tasks/TasksList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class DashboardView extends Component {
  render() {
    console.log(this.props);
    const { tasks } = this.props;
    return (
      <div>
        <TaskList tasks={tasks}></TaskList>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    tasks: state.firestore.ordered.tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tasks' }])
)(DashboardView);
