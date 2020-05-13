import { EDIT_USER } from './types';
import { userData } from '../data/Users';
 
export const editingUser = (userData) => {
    return (dispatch) => {
        console.log("edit User");
        dispatch({
            type: EDIT_USER,
            payload: userData.id
        })
    }
}