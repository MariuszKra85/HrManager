import React from 'react';
import { NavLink } from 'react-router-dom';

const adminCheck = (admin) => {
  if (admin === 'admin') {
    return (
      <>
        <li>
          <NavLink to='/newUser'>New User</NavLink>
        </li>
        <li>
          <NavLink to='/tasksDone'>Task Done</NavLink>
        </li>
        <li>
          <NavLink to='/overviewUsers'>Users Overview</NavLink>
        </li>
      </>
    );
  } else {
    return null;
  }
};

const SignLink = ({ profile, logOutFun }) => {
  return (
    <ul className='right  blue lighten-2'>
      <li>
        <NavLink to='/dashboard'>Home</NavLink>
      </li>
      {adminCheck(profile.role)}
      <li>
        <NavLink to='/newTask'>New Task</NavLink>
      </li>
      <li>
        <NavLink to='/tasks'>Tasks</NavLink>
      </li>
      <li>
        <NavLink to='/myTasks'>My Tasks</NavLink>
      </li>

      <li>
        <NavLink to='/login' onClick={logOutFun}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating blue lighten-1'>
          {profile.initial}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignLink;
