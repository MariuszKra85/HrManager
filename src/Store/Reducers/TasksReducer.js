/* eslint-disable default-case */
const init = {};

const TaskReducer = (state = init, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      console.log('create Task', action.task);
      return state;
    case 'CREATE_TASK_ERROR':
      console.log('Task not created', action.err);
      return {
        ...state,
        taskError: action.err,
      };
    case 'DELETE_TASK':
      console.log('Task deleted', action.task);
      return {
        ...state,
      };
    case 'DELETE_TASK_ERROR':
      console.log('Task not deleted');
      return {
        ...state,
        taskError: action.err,
      };
    case 'EDIT_TASK':
      console.log('task edited');
      return {
        ...state,
      };
    case 'EDIT_TASK_ERROR':
      console.log('Task edit error');
      return {
        ...state,
        taskError: action.err,
      };
    default:
      return state;
  }
};
export default TaskReducer;
