import {ACTION} from '../util/constants'

export function performLogin(loginCred) {
    return {
        type : ACTION.USER_LOGIN,
        payload : loginCred
    }
}