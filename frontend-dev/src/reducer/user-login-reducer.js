import { ACTION } from '../util/Constant'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function UserLoginReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_REQUEST:
            return {
                loading: true
            }
        case ACTION.LOGIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                loggedIn: true,
                user: action.payload
            };
        case ACTION.LOGIN_FAILURE:
            console.log("inside failure reducer")
            localStorage.removeItem('user');
            return {
                error: true
            }
        case ACTION.LOGOUT:
            console.log("removed item logout")
            localStorage.removeItem('user');
            return {};
        default:
            return state
    }
}