import React, { Component } from 'react';
import { createTask } from '../../Store/Action/TaskAction';
import { connect } from 'react-redux';

class CreateTask extends Component {
  state = {
    name: '',
    content: '',
  };

  handleChange = (e) => {
    console.log(e.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createTask(this.state);
  };

  render() {
    return (
      <form className='container row' onSubmit={this.handleSubmit}>
        <div className='input-field col s12 '>
          <input
            placeholder='name'
            id='name'
            type='text'
            onChange={this.handleChange}
          />
        </div>
        <div className='input-field col s12 '>
          <input
            placeholder='discribe'
            id='content'
            type='text'
            onChange={this.handleChange}
          />
        </div>
        <button
          className='right btn blue lighten-2 wave waves-light'
          type='submit'
          name='submit'
        >
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(CreateTask);
