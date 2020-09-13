import React, { Component } from 'react';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  authFun = (e) => {
    e.preventDefault();
    console.log(e);
  };

  handlerChange = (e) => {
    console.log(e.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <form className='container row' onSubmit={this.authFun}>
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
      </form>
    );
  }
}

export default LoginView;
