export const createTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: 'CREATE_TASK',
      task,
    });
  };
};
