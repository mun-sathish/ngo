import { ACTION } from '../util/Constant'

export function VideoReducer(state, action) {
    switch (action.type) {
        case ACTION.VIDEO:
            return action.payload
        case ACTION.VIDEO_ADD:
            return [...state, action.payload]
        case ACTION.VIDEO_UPDATE:
            return [...state]
        case ACTION.VIDEO_DELETE:
            let x = state
            x.map(item => item.video_id !== action.payload.video_id)
            return x
        default:
            return []
    }
}
