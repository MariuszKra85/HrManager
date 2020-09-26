import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWrS_WeFTzR4P7KA_De-1AsZW8r1hZUEA',
  authDomain: 'hr-manager-c9beb.firebaseapp.com',
  databaseURL: 'https://hr-manager-c9beb.firebaseio.com',
  projectId: 'hr-manager-c9beb',
  storageBucket: 'hr-manager-c9beb.appspot.com',
  messagingSenderId: '819527141093',
  appId: '1:819527141093:web:ec9274951020ee6a08b60c',
  measurementId: 'G-HB5Y5QS6LM',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
