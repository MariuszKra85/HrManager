const init = {
  authError: null,
};

const AuthReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'login failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case 'LOGOUT_SUCCESS': {
      console.log('logout success');
      return {
        ...state,
      };
    }
    case 'LOGOUT_ERROR': {
      console.log('logout Error');
      return {
        ...state,
      };
    }
    case 'CREATE_USER_SUCCESS': {
      console.log('Create User Success');
      return {
        ...state,
      };
    }

    case 'CREATE_USER_ERROR': {
      console.log('Create User failed');
      return {
        ...state,
        authError: action.err,
      };
    }

    default:
      return state;
  }
};
export default AuthReducer;
