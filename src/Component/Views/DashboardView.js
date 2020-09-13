import React, { Component } from 'react';
import TaskList from '../Tasks/TasksList';
import { connect } from 'react-redux';

class DashboardView extends Component {
  render() {
    return (
      <div>
        <TaskList tasks={this.props.tasks}></TaskList>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
  };
};

export default connect(mapStateToProps)(DashboardView);
