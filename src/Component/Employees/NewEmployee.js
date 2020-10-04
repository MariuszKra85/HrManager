import React, { Component } from 'react';

class NewEmployee extends Component {
  state = {
    name: '',
    surname: '',
    empNumber: '',
    startDate: '',
    position: '',
  };
  render() {
    return <div> tu tworzymy nowego pracownika</div>;
  }
}

export default NewEmployee;
