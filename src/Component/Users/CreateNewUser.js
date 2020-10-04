import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../Store/Action/authActions';
import { Link } from 'react-router-dom';

class CreateNewUser extends Component {
  state = {
    name: '',
    surname: '',
    role: '',
    email: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.setState = {
      name: '',
      surname: '',
      role: '',
      email: '',
    };
    this.props.history.push('/');
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field col s12'>
            <input
              type='text'
              id='name'
              placeholder='Name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='surname'
              placeholder='Surname'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='role'
              placeholder='Role'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='email'
              id='email'
              placeholder='Email'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='password'
              id='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
          </div>
          <button
            className='right btn blue lighten-2 wave waves-light'
            type='submit'
            name='submit'
          >
            Create User
          </button>
        </form>
        <Link
          to={'/usersList'}
          className='left btn blue lighten-2 wave waves-light'
        >
          {' '}
          Show Users List
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(createUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(CreateNewUser);
