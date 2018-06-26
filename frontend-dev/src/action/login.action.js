import { ACTION } from '../util/Constant'

export const loginActions = {
    performLogin,
    loginSuccess,
    loginFailure,
    userLogout
};

function performLogin(loginCred) {
    return {
        type : ACTION.LOGIN_REQUEST,
        payload : loginCred
    }
}

function loginSuccess(user) {
    return {
        type : ACTION.LOGIN_SUCCESS,
        payload : user
    }
}

function loginFailure() {
    return {
        type : ACTION.LOGIN_FAILURE
    }
}

function userLogout() {
    return {
        type : ACTION.LOGOUT
    }
}