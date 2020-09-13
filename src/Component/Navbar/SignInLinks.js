import React from 'react';
import { NavLink } from 'react-router-dom';

const SignLink = (fun) => (
  <ul className='right  blue lighten-2'>
    <li>
      <NavLink to='/dashboard'>Home</NavLink>
    </li>

    <li>
      <NavLink to='/newTask'>New Task</NavLink>
    </li>
    <li>
      <NavLink to='/tasks'>Tasks</NavLink>
    </li>
    <li>
      <NavLink to='/'>Log Out</NavLink>
    </li>
    <li>
      <NavLink to='/' className='btn btn-floating blue lighten-1'>
        NN
      </NavLink>
    </li>
  </ul>
);

export default SignLink;
