export const createTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tasks')
      .add({
        ...task,
        ifdone: false,
        whoIncluded: [],
      })
      .then(() => {
        dispatch({
          type: 'CREATE_TASK',
          task,
        });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_TASK_ERROR', err });
      });
  };
};

export const deleteTask = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tasks')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: 'DELETE_TASK',
          id,
        });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_TASK_ERROR', err });
      });
  };
};

export const signToTask = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const item = getState().firestore.data.tasks[id];
    const who = getState().firebase.auth.uid;
    const firestore = getFirestore();
    let whoInc = item.whoIncluded;
    firestore
      .collection('tasks')
      .doc(id)
      .update({
        ...item,
        whoIncluded: [...whoInc, who],
      })
      .then(() => {
        dispatch({
          type: 'EDIT_TASK',
        });
      })
      .catch((err) => {
        dispatch({ type: 'EDIT_TASK_ERROR', err });
      });
  };
};
export const signOutTask = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const item = getState().firestore.data.tasks[id];
    const who = getState().firebase.auth.uid;
    const firestore = getFirestore();
    let whoInc = item.whoIncluded.map((e) => {
      if (e !== who) {
        return e;
      } else {
        return null;
      }
    });
    console.log(whoInc);
    firestore
      .collection('tasks')
      .doc(id)
      .update({
        ...item,
        whoIncluded: [...whoInc],
      })
      .then(() => {
        dispatch({
          type: 'EDIT_TASK',
        });
      })
      .catch((err) => {
        dispatch({ type: 'EDIT_TASK_ERROR', err });
      });
  };
};
