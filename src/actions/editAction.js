import { EDIT_USER } from './types';
 
export const editingUser = () => {
    return (dispatch) => {
        console.log("edit User");
        dispatch({
            type: EDIT_USER
        })
    }
}