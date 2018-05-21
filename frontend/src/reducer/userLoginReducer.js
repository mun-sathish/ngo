import { ACTION } from '../util/constants'

export function userLoginDetails(state, action) {
    switch (action.type) {
        case ACTION.USER_LOGIN:
            return {
                user: action.payload
            }

        default:
            return {
                user: {
                    statusCode : 0
                }
            }
    }
}
