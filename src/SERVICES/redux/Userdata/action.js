import types from './types';

export const profileSuccess = resposejson => {
  console.log('Data in userdata hhhh', resposejson);
  return dispatch => {
    dispatch({type: types.ProfileSuccessfull, playload: {resposejson}});
  };
};

export const profileFailed = payload => ({type: types.ProfileFailed, payload});

export const EditProfileSuccess = resposejson => {
  return dispatch => {
    dispatch({type: types.Editprofilesuccesss, playload: {resposejson}});
  };
};
export const UpdateUser = resposejson => {
  return dispatch => {
    dispatch({type: types.updateuser, playload: {resposejson}});
  };
};
export function Logout() {
  return dispatch => {
    dispatch({type: types.logout});
  };
}
