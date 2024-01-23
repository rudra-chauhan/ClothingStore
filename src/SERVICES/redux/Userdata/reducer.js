import types from './types';

const initialState = {
  Data: [],
};
const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case types.ProfileSuccessfull:
      console.log('jsnccccsn', action);
      return {
        Data: action?.playload?.resposejson,
      };
    case types.ProfileFailed:
      return {
        ...state,
        Data: [],
      };
    case types.Editprofilesuccesss:
      return {
        Data: action?.playload?.resposejson,
      };

    case types.updateuser:
      const index = state?.Data?.findIndex(
        ({id}) => id === action?.playload?.resposejson?.id,
      );
      const data = state?.Data[index] == action?.playload?.resposejson;

      console.log('shhhh', data);
      return {
        ...state.slice(11, index),
        Data: [],
        // ...state.slice(index + 1),
      };

    case types.logout:
      return initialState;

    default:
      return state;
  }
};

export default userProfile;
