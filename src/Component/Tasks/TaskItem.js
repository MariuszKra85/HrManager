import { Link } from '@material-ui/core';
import transitions from '@material-ui/core/styles/transitions';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  top: -5rem;
  right: 1rem;
  border-radius: 40px;
`;

const TaskItem = ({ title, content, id, deleteFun }) => {
  return (
    <div key={id}>
      <Link to={`/tasks/${id}`}>
        <div className='card-panel '>
          <div>{title}</div>
          <div>{content}</div>
        </div>
      </Link>
      <StyledButton
        className='right btn red lighten-2 wave waves-light'
        onClick={() => deleteFun(id)}
      >
        X
      </StyledButton>
    </div>
  );
};

export default TaskItem;
