import { EDIT_USER, GET_USER_DATA, GET_ALL_USERS } from "../actions/types";

const initialState = null


export default (state = initialState, action) => {
    switch(action.type) {
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
        case EDIT_USER:
            console.log(action.payload)
            return {
                ...state,
                editingUser: action.payload
            }
        default:
            return state;
    }
}