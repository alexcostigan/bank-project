import { GET_USER_DATA, GET_ALL_USERS } from './types'
import { userData } from '../data/Users'

export const getUserData = () => {
    return (dispatch) => {
        console.log("getting user data");
        dispatch({
            type: GET_USER_DATA
        })
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_USERS,
            payload: userData
        })
    }
}