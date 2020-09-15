import React from 'react';
import TaskItem from './TaskItem';

const TasksList = ({ tasks }) => {
  return (
    <div>
      {tasks &&
        tasks.map((e) => {
          console.log(e);
          return <TaskItem title={e.title} content={e.content} key={e.id} />;
        })}
    </div>
  );
};

export default TasksList;
