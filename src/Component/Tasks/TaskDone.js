import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteTask } from '../../Store/Action/TaskAction';
import TaskItem from './TaskItem';

const TaskDone = (props) => {
  console.log(props);

  const TaskDone = () => {
    const item =
      props.tasksDone &&
      props.tasksDone.map((task) => {
        return (
          <TaskItem
            title={task.name}
            content={task.content}
            key={task.id}
            id={task.id}
            deleteFun={() => props.deleteTask(task.id, 'taskdone')}
            ifdone={task.ifdone}
            date={task.date}
          />
        );
      });
    return item;
  };

  return <div>{TaskDone()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tasksDone: state.firestore.ordered.taskdone,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id, collection) => dispatch(deleteTask(id, collection)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'taskdone' }])
)(TaskDone);
