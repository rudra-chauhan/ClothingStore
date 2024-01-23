import types from './types';
const initialstate = {
  isempty: true,
  cartData: [],
};
// function removeItemOnce(arr, value) {
//   var index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// const removetheData = (state, val) => {
//   console.log('The state : ', state);
//   var index = state.cartData.indexOf(val);
//   if (index > -1) {
//     state.cartData.splice(index, 1);
//   }
//   return state;
// };
const removetheData = (state, val) => {
  var updatedCartData = state.cartData.filter(item => item.id !== val.id);
  state.cartData = updatedCartData;
  state.isempty = state.cartData.length == 0 ? true : false;
  console.log(state);
  return state;
};

// var index = array.indexOf(val);
// if (index > -1) {
//   array.splice(index, 1);
// }
// return array;

const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.addedToCart:
      return {
        ...state,
        cartData: [...state.cartData, action.playload.responsejson],
        isempty: false,
      };
    case types.removedFromCart:
      return removetheData(
        {
          ...state,
        },
        action.playload.responsejson,
      );

    // {
    //   ...state,
    //   cartData: removetheData(
    //     [...state.cartData],
    //     action.playload.responsejson,
    //   ),
    //   isempty: state.cartData.length == 0 ? true : false,
    // };
    default:
      return state;
  }
};
export default cartReducer;
