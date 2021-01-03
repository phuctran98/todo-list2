import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayFrom from "./displayForm";
import editItem from "./editItem";
import filter from "./filter";
import findName from "./findName";
import sortTask from "./sortTask";

const myReducer = combineReducers({tasks,isDisplayFrom,editItem,filter,findName,sortTask})

export default myReducer