import { ACTION } from '../util/constants'

export function videoReducer(state, action) {
    switch (action.type) {
        case ACTION.VIDEO:
            return action.payload
        case ACTION.VIDEO_ADD:
            return [...state, action.payload]
        default:
            return []
    }
}
