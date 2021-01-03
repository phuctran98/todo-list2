import * as types from "../constants/actionType"
const initState = ''
var myReducer = (state = initState, action) => { 
    switch (action.type) {
       case types.FIND_NAME:
            // console.log(action)
            return action.name
        default:
            return state;
    }

}
export default myReducer