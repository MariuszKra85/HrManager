export const createTask = (task) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CREATE_TASK',
      task,
    });
  };
};
