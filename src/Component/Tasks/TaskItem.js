import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  top: -8rem;
  right: 1rem;
  margin: 5px;
  border-radius: 40px;
  text-shadow: 2px 2px 2px #434343;
`;

const TaskItem = ({
  role,
  title,
  content,
  id,
  deleteFun,
  signInToTask,
  signOutToTask,
  initials,
}) => {
  let key = 0;
  return (
    <div key={id}>
      <Link to={`/task/${id}`}>
        <div className='card-panel '>
          <h4>{title}</h4>
          <div>{content}</div>
          {initials &&
            initials.map((e) => {
              key++;
              let item =
                e &&
                e.map((e) => {
                  if (e != null) {
                    return (
                      <button
                        className='btn btn-floating blue lighten-1'
                        key={key}
                      >
                        {e}
                      </button>
                    );
                  } else {
                    return null;
                  }
                });
              return item;
            })}
        </div>
      </Link>
      {role === 'admin' ? (
        <StyledButton
          className='right btn red lighten-2 wave waves-light'
          onClick={() => deleteFun(id)}
        >
          delete Task
        </StyledButton>
      ) : (
        <StyledButton
          className='right btn red lighten-2 wave waves-light'
          onClick={() => signOutToTask(id)}
        >
          SignOut Task
        </StyledButton>
      )}
      <StyledButton
        className='right btn green lighten-2 wave waves-light'
        onClick={() => signInToTask(id)}
      >
        take Task
      </StyledButton>
    </div>
  );
};

export default TaskItem;
