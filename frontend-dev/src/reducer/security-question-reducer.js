import { ACTION } from '../util/Constant'

export function SecurityQuestionReducer(state, action) {
    switch (action.type) {
        case ACTION.SQ:
            return action.payload
        case ACTION.SQ_ADD:
            return [...state, action.payload]
        case ACTION.BOOK_UPDATE:
            return [...state]
        case ACTION.BOOK_DELETE:
            let x = state
            x.map(item => item.security_question_id !== action.payload)
            return x
        default:
            return []

        // case ACTION.SQ_DELETE:
        //     let temp = state;
        //     temp = temp.filter(item => item.security_question_id !== action.payload)

        //     return temp

        // case ACTION.SQ_ADD:
        //     store.dispatch(securityActions.fetchSecurityQuestion())
        //     return [...state]

        // case ACTION.SQ:
        //     if (action.payload == null)
        //         return []
        //     else
        //         return action.payload
        // default:
        //     return []
    }
}
