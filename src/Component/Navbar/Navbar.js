import React, { Component } from 'react';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

class Navbar extends Component {
  state = {
    ifSignIn: false,
  };

  checkSingIn = () => {
    if (this.state.ifSignIn) {
      return <SignInLinks></SignInLinks>;
    } else {
      return <SignOutLinks></SignOutLinks>;
    }
  };

  render() {
    return (
      <nav className='nav-wrapper grey lighten-4'>{this.checkSingIn()}</nav>
    );
  }
}

export default Navbar;
