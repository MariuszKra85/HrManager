import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledChart = styled.div((props) => {
  let color;
  if (props.task < 0.12) {
    color = 'red';
  } else if (0.12 < props.task && props.task < 0.31) {
    color = 'yellow';
  } else {
    color = 'green';
  }
  return {
    color: '#2929292',
    backgroundColor: color,
    height: '20px',
    width: props.task * 100 + '%',
  };
});

const StyledChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #64b5f6;
  height: 22px;
  width: 400px;
  border-radius: 5px;
  border: solid 1px #64b5f6;
`;

const UserView = ({ name, task, tasksDone, tasksTotal }) => {
  let Task = (task.length / tasksTotal).toFixed(2);
  let TaskDone = (tasksDone.length / tasksTotal).toFixed(2);

  const ShowLinkFun = (arrToMap) => {
    return arrToMap.map((task) => {
      return (
        <div key={task.id}>
          <Link to={`/task/${task.id}`}>{task.name}</Link>
        </div>
      );
    });
  };

  return (
    <div className='card-panel'>
      <h2>{name}</h2>
      <div>
        <p>task sign in:</p>
        {ShowLinkFun(task)}
      </div>
      <div>
        <p>task Done:</p>
        {ShowLinkFun(tasksDone)}
      </div>
      <div>
        <div>how many tasks in progress: {task.length}</div>
        <div>from total to do: {Task}</div>
        <div>from total done: {TaskDone}</div>
      </div>
      <div>
        {task ? (
          <StyledChartWrapper>
            <StyledChart task={Task}>
              {task.length !== 0 ? 'To Do' : null}
            </StyledChart>
            <StyledChart task={TaskDone}>
              {tasksDone.length !== 0 ? 'Done!' : null}
            </StyledChart>
          </StyledChartWrapper>
        ) : null}
      </div>
    </div>
  );
};

export default UserView;
