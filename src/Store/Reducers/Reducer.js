import AuthReducer from './AuthReducer';
import TaskReducer from './TasksReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const Reducer = combineReducers({
  auth: AuthReducer,
  task: TaskReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default Reducer;
