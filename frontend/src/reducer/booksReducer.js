import { ACTION } from '../util/constants'

export function booksReducer(state, action) {
    switch (action.type) {
        case ACTION.BOOK:
            return action.payload
        case ACTION.BOOK_ADD:
            return [...state, action.payload]
        default:
            return []
    }
}
