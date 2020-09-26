import React from 'react';
import { NavLink } from 'react-router-dom';

const SignLink = (fun) => (
  <ul className='right  blue lighten-2'>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/login'>Log In</NavLink>
    </li>
  </ul>
);

export default SignLink;
