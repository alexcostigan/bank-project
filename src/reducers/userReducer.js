import { EDIT_USER, GET_USER_DATA, GET_ALL_USERS } from "../actions/types";

const initialState = null


export default (state = initialState, action) => {
    switch(action.type) {
        case EDIT_USER:
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index > -1){
             return {
                  ...state,
                      ...state.slice(0, index),
                      allUsers: action.payload,
                      ...state.slice(index + 1),
                  }
             }
            
        case GET_USER_DATA:
            console.log(state);
            return {
                ...state
            }
        case GET_ALL_USERS:
            console.log(action.payload);
            return {
                ...state,
                allUsers: action.payload
            }
        default:
            return state;
    }
}