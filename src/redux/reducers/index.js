import { combineReducers } from "redux";
import choose from './choose';


const rootReducer=new combineReducers({
  choose,
})

export default rootReducer;