import { ACTION } from '../util/constants'
import store from '../store/store'
import { fetchSecurityQuestion } from '../action/security_question_action'

export function securityQuestionReducer(state, action) {
    switch (action.type) {

        case ACTION.SQ_DELETE:
            console.log("sinde delete")
            console.log(state)
            console.log(action)
            let temp = state;
            temp = temp.filter(item => item.security_question_id !== action.payload)
            console.log(temp)
            return temp

        case ACTION.SQ_ADD:
            store.dispatch(fetchSecurityQuestion())
            return [...state]

        case ACTION.SQ:
            if (action.payload == null)
                return []
            else
                return action.payload
        default:
            return []
    }
}
