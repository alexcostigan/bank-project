import { EDIT_USER, GET_USER_DATA, GET_ALL_USERS } from "../actions/types";

const initialState = null


export default (state = initialState, action) => {
    switch(action.type) {
        case EDIT_USER:
            return {
                Name: this.Name = " "
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