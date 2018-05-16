import { ACTION } from '../util/constants'

export function audioReducer(state, action) {
    switch (action.type) {
        case ACTION.AUDIO:
            return action.payload
        case ACTION.AUDIO_ADD:
            return [...state, action.payload]
        case ACTION.AUDIO_UPDATE:
            return [...state]
        case ACTION.AUDIO_DELETE:
            let x = state
            x.map(item => item.audio_id !== action.payload.audio_id)
            return x
        default:
            return []
    }
}
