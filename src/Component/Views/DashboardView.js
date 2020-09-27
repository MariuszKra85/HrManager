import React, { Component } from 'react';
import TaskList from '../Tasks/TasksList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3%;
`;

class DashboardView extends Component {
  render() {
    if (this.props.auth) {
      return <div> You need to be login</div>;
    } else {
      return (
        <StyledWrapper>
          <div className='col s12 m6 l6'>
            <TaskList></TaskList>
          </div>
          <div> tu bedzie drugie pole</div>
        </StyledWrapper>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth.isEmpty,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tasks' }])
)(DashboardView);
