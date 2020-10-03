import React from 'react';
import styled from 'styled-components';

const StyledChart = styled.div((props) => {
  let color;
  if (props.task < 0.5) {
    color = 'red';
  } else {
    color = 'yellow';
  }
  return {
    backgroundColor: color,
    height: '5px',
    width: props.task * 100 + '%',
  };
});

const StyledChartWrapper = styled.div`
  background: #64b5f6;
  height: 7px;
  width: 400px;
  border-radius: 5px;
  border: solid 1px #64b5f6;
`;

const UserView = ({ name, task, tasksDone, tasksTotal }) => {
  let Task = (task.length + tasksDone.length) / tasksTotal;
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <p>task sign in:</p>
        {task &&
          task.map((task) => {
            return <div>{task.id}</div>;
          })}
      </p>
      <div>
        <p>task Done:</p>
        {tasksDone &&
          tasksDone.map((task) => {
            return <div>{task.id}</div>;
          })}
      </div>

      <div>how many tasks in: {task.length + tasksDone.length}</div>
      <div>from total: {Task}</div>
      <div></div>
      {task ? (
        <StyledChartWrapper>
          <StyledChart task={Task}></StyledChart>
        </StyledChartWrapper>
      ) : null}
    </div>
  );
};

export default UserView;
