import * as types from "../constants/actionType"
const initState = {
    name: '',
    status : -1
}
var myReducer = (state = initState, action) => { 
    switch (action.type) {
       case types.FILTER_TABLE:
            return {
                name : action.filter.name,
                status : parseInt(action.filter.status)
            }
        default:
            return state;
    }

}
export default myReducer