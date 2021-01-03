const stateInit = {
    status : false,
}

var myReducer = (state = stateInit, action) =>{
    if(action.type === "TOGGLE_STATUS"){
        state = !state
    }
    return state
}

export default myReducer