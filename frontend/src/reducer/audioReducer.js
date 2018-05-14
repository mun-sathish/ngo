import { ACTION } from '../util/constants'

export function audioReducer(state, action) {
    switch (action.type) {
        case ACTION.AUDIO:
            return action.payload
        case ACTION.AUDIO_ADD:
            return [...state, action.payload]
        default:
            return []
    }
}
