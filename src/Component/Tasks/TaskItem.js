import React from 'react';

const TaskItem = ({ title, content }) => {
  return (
    <div className='card-panel '>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default TaskItem;
