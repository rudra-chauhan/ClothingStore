import types from './types';

export const loginSuccessfull = resposejson => {
  console.log('Data in Acction', resposejson);
  return dispatch => {
    dispatch({type: types.loginSuccess, playload: {resposejson}});
  };
};

export const LoginFailed = responseJson => {
  console.log('Signup in Acction', responseJson);
  return dispatch => {
    dispatch({type: types.loginFailed, payload: {responseJson}});
  };
};
// export const LoginFail = payload => ({type: types.loginFailed, payload});

export function Logout() {
  return dispatch => {
    dispatch({type: types.logout});
  };
}
