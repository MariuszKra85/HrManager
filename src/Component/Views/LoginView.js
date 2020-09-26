import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signIn } from '../../Store/Action/authActions';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handlerChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const authErr = this.props.authError;
    if (this.props.auth) {
      return <Redirect to='/dashboard' />;
    } else {
      return (
        <form className='container row' onSubmit={this.handleSubmit}>
          <div className='input-field col s12 '>
            <input
              placeholder='email'
              id='email'
              type='email'
              onChange={this.handlerChange}
            />
          </div>
          <div className='input-field col s12 '>
            <input
              placeholder='password'
              id='password'
              type='password'
              onChange={this.handlerChange}
            />
          </div>
          <button
            className='right btn blue lighten-2 wave waves-light'
            type='submit'
            name='submit'
          >
            Login
          </button>
          {authErr ? <div className='red-text centre'>login failed</div> : null}
        </form>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (data) => dispatch(signIn(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
