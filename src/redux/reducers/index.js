import { combineReducers } from "redux";
import choose from './choose';
import updateValue from './updateValue';


const rootReducer=new combineReducers({
  choose,
  updateValue
})

export default rootReducer;