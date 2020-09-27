export const signIn = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_SUCCESS' });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'LOGOUT_ERROR', err });
      });
  };
};

export const createUser = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const login = getState().firebase.auth.email;
    const pass = getState().firebase.profile.password;

    console.log(login);
    console.log(pass);

    console.log('odpalamy create user');
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        console.log('tworzymy kolekcje');
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            name: newUser.name,
            surname: newUser.surname,
            initial: newUser.name[0] + newUser.surname[0],
            email: newUser.email,
            role: newUser.role,
          })
          .then(() => {
            console.log(res);
            console.log('tworzymy kolekcje dla admina');
            return firestore
              .collection('usersForAdmin')
              .doc(res.user.uid)
              .set({
                name: newUser.name,
                surname: newUser.surname,
                initial: newUser.name[0] + newUser.surname[0],
                email: newUser.email,
                role: newUser.role,
                password: newUser.password,
              });
          })
          .then(() => {
            firebase
              .auth()
              .signInWithEmailAndPassword(login, pass)
              .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
              })
              .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err });
              });
            dispatch({ type: 'CREATE_USER_SUCCESS' });
          })
          .catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err });
          });
      });
  };
};
