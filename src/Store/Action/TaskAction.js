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
    console.log('wywolanie funkcji');
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

export const editTask = (itemData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const item = getState().firestore.data.tasks[itemData[0]];
    const who = getState().firebase.auth.uid;
    const firestore = getFirestore();
    console.log(item);
    firestore
      .collection('tasks')
      .doc(itemData[0])
      .update({
        ...item,
        [itemData[1]]: who,
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
