import { createStore } from 'redux'
import {status, sort} from './action/index'
import  myReducer  from "./reducers/index";


let store = createStore(myReducer)
console.log("store: ",store.getState())
// var action = {type : "TOGGLE_STATUS"}
store.dispatch(status())
// var sortAction = {
//     type : "SORT",
//     sort: {
//         by : "name",
//         value : -1
//     }
// }
store.dispatch(sort({by: "name",value : -1}))

console.log("new store: ",store.getState())

