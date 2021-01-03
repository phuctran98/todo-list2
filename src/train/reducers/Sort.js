const stateInit = {
    by : '',
    value : 1
}

var myReducer = (state = stateInit, action) =>{
    if(action.type === "SORT"){
        const {by, value} = action.sort
        return{
            by : by,
            value : value
        }
    }
    return state 
}

export default myReducer