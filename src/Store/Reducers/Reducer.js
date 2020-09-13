import AuthReducer from './AuthReducer';
import TaskReducer from './TasksReducer';
import { combainReducers, combineReducers } from 'redux';

const Reducer = combineReducers({
  auth: AuthReducer,
  task: TaskReducer,
});

export default Reducer;
