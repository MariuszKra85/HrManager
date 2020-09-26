export const createTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tasks')
      .add({
        ...task,
        ifdone: false,
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
