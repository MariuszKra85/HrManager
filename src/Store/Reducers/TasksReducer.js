/* eslint-disable default-case */
const init = {};

const TaskReducer = (state = init, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      console.log('create Task', action.task);
      return state;
    case 'CREATE_TASK_ERROR':
      console.log('Task not created', action.err);
    default:
      return state;
  }
};
export default TaskReducer;
