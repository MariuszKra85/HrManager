import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 5px;
  border-radius: 40px;
  text-shadow: 2px 2px 2px #434343;
`;

const StyledButtonWrapeer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TaskItem = ({
  role,
  title,
  content,
  id,
  deleteFun,
  signInToTask,
  signOutTask,
  taskDone,
  initials,
  whoDone,
  ifdone,
  date,
}) => {
  let key = 0;
  return (
    <div key={id} className='card-panel '>
      <Link to={`/task/${id}`}>
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
        {ifdone ? <div>Done Date: {date}</div> : null}
      </Link>
      <StyledButtonWrapeer>
        {role === 'admin' || ifdone ? (
          <StyledButton
            className=' btn red lighten-2 wave waves-light'
            onClick={() => deleteFun(id)}
          >
            delete Task
          </StyledButton>
        ) : (
          <StyledButton
            className=' btn red lighten-2 wave waves-light'
            onClick={() => signOutTask(id)}
          >
            SignOut Task
          </StyledButton>
        )}
        {signInToTask && signInToTask !== null ? (
          <StyledButton
            className=' btn green lighten-2 wave waves-light'
            onClick={() => signInToTask(id)}
          >
            take Task
          </StyledButton>
        ) : null}
        {!ifdone && signInToTask === null ? (
          <StyledButton
            className=' btn green lighten-2 wave waves-light'
            onClick={() => taskDone(id)}
          >
            Done !
          </StyledButton>
        ) : null}
      </StyledButtonWrapeer>
    </div>
  );
};

export default TaskItem;
