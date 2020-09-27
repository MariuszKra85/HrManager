import React, { Component } from 'react';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { signOut } from '../../Store/Action/authActions';
import { connect } from 'react-redux';

class Navbar extends Component {
  checkSingIn = () => {
    if (this.props.auth) {
      return (
        <SignInLinks
          profile={this.props.profile}
          logOutFun={() => this.logOut()}
        ></SignInLinks>
      );
    } else {
      return <SignOutLinks></SignOutLinks>;
    }
  };

  logOut = () => {
    this.props.signOut();
  };

  render() {
    return (
      <nav className='nav-wrapper grey lighten-4'>{this.checkSingIn()}</nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
