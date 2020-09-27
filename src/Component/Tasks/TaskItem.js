import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  top: -5rem;
  right: 1rem;
  margin: 5px;
  border-radius: 40px;
  text-shadow: 2px 2px 2px #434343;
`;

const TaskItem = ({
  title,
  content,
  id,
  deleteFun,
  signInToTask,
  initials,
}) => {
  const dataSignToTask = [id, 'whoIncluded'];
  console.log(initials);
  return (
    <div key={id}>
      <Link to={`/task/${id}`}>
        <div className='card-panel '>
          <div>{title}</div>
          <div>{content}</div>
          <div>{initials}</div>
        </div>
      </Link>
      <StyledButton
        className='right btn red lighten-2 wave waves-light'
        onClick={() => deleteFun(id)}
      >
        x
      </StyledButton>
      <StyledButton
        className='right btn green lighten-2 wave waves-light'
        onClick={() => signInToTask(dataSignToTask)}
      >
        v
      </StyledButton>
    </div>
  );
};

export default TaskItem;
