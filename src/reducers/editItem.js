import * as types from "../constants/actionType"
const initState = {
    id:'',
    name: '',
    status : false
}
var myReducer = (state = initState, action) => { 
    switch (action.type) {
       case types.EDIT_ITEM:
            state = action.task
            return state
        default:
            return state;
    }

}
export default myReducer