import {combineReducers} from 'redux';
import userReducer from './signup/reducer';
import userProfile from './Userdata/reducer';
import cartReducer from './BuyCart/reducer';
const rootReducer = combineReducers({
  userReducer: userReducer,
  userProfile: userProfile,
  cartReducer: cartReducer,
});
export default rootReducer;
