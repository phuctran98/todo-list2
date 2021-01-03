import * as types from "../constants/actionType"
import  randomstring  from "randomstring";


var data = JSON.parse(localStorage.getItem("tasks"))
var findIndex = (tasks,id) =>{
    var result = -1
    tasks.forEach((task,index)=>{
      if(task.id === id){
        result = index
        return result
      }
    })
    return result
}


const initState = data ? data :[]

var myReducer = (state = initState, action) => { 
    switch (action.type) {
        case types.LIST_ALL:
            return [...state];
        case types.SAVE_TASK:
            var newTask = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
            }
            if(!action.task.id){
                newTask.id = randomstring.generate()
                state.push(newTask)
            }
            else{
                var index = findIndex(state,action.task.id)
                state[index] = action.task
            }
            localStorage.setItem("tasks",JSON.stringify(state))
            return [...state]
        case types.CHANGE_STATUS_ITEM:
            index = findIndex(state,action.id)
            //c1
            var taskClone = {...state[index]}
            taskClone.status = !taskClone.status 
            state[index] = taskClone
            //c2:
            // state[index] = {
            //     ...state,
            //     status : !state.status
            // }
            localStorage.setItem("tasks",JSON.stringify(state))
            return [...state]
        case types.DELETE_STATUS_ITEM:
            index = findIndex(state,action.id)
            state.splice(index,1)
            localStorage.setItem("tasks",JSON.stringify(state))
            return [...state]
        default:
            return state;
    }

}
export default myReducer