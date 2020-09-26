import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteTask } from '../../Store/Action/TaskAction';
const TasksList = (props) => {
  if (props.tasks) {
    const tasks = props.tasks;
    console.log(props);
    if (tasks.length === 0) {
      return <div> No Task for Today</div>;
    }
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'tasks' }])
)(TasksList);
