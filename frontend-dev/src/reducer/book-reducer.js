import { ACTION } from '../util/Constant'

export function BookReducer(state, action) {
    switch (action.type) {
        case ACTION.BOOK:
            return action.payload
        case ACTION.BOOK_ADD:
            return [...state, action.payload]
        case ACTION.BOOK_UPDATE:
            return [...state]
        case ACTION.BOOK_DELETE:
            let x = state
            x.map(item => item.book_id !== action.payload.book_id)
            return x
        default:
            return []
    }
}
