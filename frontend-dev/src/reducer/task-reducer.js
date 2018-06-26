import { ACTION } from '../util/Constant'

export function TaskReducer(state, action) {
    switch (action.type) {
        case ACTION.TASK:
            return action.payload
        case ACTION.TASK_ADD:
            return [...state, action.payload]
        case ACTION.TASK_UPDATE:
            return [...state]
        case ACTION.TASK_DELETE:
            let x = state
            x.map(item => item.task_id !== action.payload.task_id)
            return x
        default:
            return []
    }
}
