import * as types from "../constants/actionType"

export const listAll = () =>{
    return{
        type : types.LIST_ALL
    }
}
export const saveTask = (task) =>{
    return{
        type : types.SAVE_TASK,
        task // task : task
    }
}
export const toggleForm = () =>{
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = () =>{
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = () =>{
    return {
        type: types.CLOSE_FORM
    }
}
export const changeStatusItem = (id) =>{
    return {
        type: types.CHANGE_STATUS_ITEM,
        id
    }
}
export const deleteStatusItem = (id) =>{
    return {
        type: types.DELETE_STATUS_ITEM,
        id
    }
}
export const editItem = (task) =>{
    return {
        type: types.EDIT_ITEM,
        task
    }
}
export const fliterTable = (filter) =>{
    return {
        type: types.FILTER_TABLE,
        filter
    }
}
export const findName = (name) =>{
    return {
        type: types.FIND_NAME,
        name
    }
}
export const sort = (sort) =>{
    return {
        type: types.SORT,
        sort
    }
}