import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const createUseList = (items) => {
  if (items) {
    return (
      <>
        {items.map((item) => {
          return (
            <StyledWrapper key={item.id}>
              <div>{item.name}</div>
              <div>{item.email}</div>
            </StyledWrapper>
          );
        })}
        <Link to={'/newUser'} className='btn blue lighten-1'>
          Back
        </Link>
      </>
    );
  } else {
    return <p> loading User List...</p>;
  }
};

const UsersList = (props) => {
  return <div>{createUseList(props.usersList)}</div>;
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    usersList: state.firestore.ordered.users,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }])
)(UsersList);
