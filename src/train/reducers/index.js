import sort from './Sort'
import status from './Status'
import { combineReducers } from "redux";

const myReducer = combineReducers({status,sort})

export default myReducer