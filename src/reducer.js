import { combineReducers } from "redux";

const actionEvent = (state = [], action) =>{
    if (action.type === "ADD_TODO") {
        return [...state, action.payload];
    } else if (action.type === "DELETE_TODO") {
        return state.filter(todo => todo.id !== action.payload);
    }
    else if (action.type === "CHANGE_STATUS") {
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
    return state;
}


export default combineReducers({
  actionEvent
});
