import React from 'react';
import TaskItem from './TaskItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TasksList = (props) => {
  if (props.tasks) {
    const task = Object.entries(props.tasks);
    return (
      <div>
        {task &&
          task.map((task) => {
            return (
              <Link to={`/task/${task[0]}`} key={task[0]}>
                <TaskItem
                  title={task[1].name}
                  content={task[1].content}
                  key={task[1].id}
                />
              </Link>
            );
          })}
      </div>
    );
  } else {
    return <div>Loding Tasks...</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.data.tasks,
  };
};

export default connect(mapStateToProps)(TasksList);
