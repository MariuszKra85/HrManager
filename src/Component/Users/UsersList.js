import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const createUseList = (items) => {
  if (items) {
    return (
      <>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.email}</div>
            </div>
          );
        })}
      </>
    );
  } else {
    return <p> loding User List</p>;
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
