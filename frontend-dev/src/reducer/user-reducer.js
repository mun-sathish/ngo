import { ACTION } from '../util/Constant'

export function UserReducer(state, action) {
    switch (action.type) {
        case ACTION.USER:
            return action.payload
        default:
            return []
    }
}
