import { ACTION } from '../util/constants'

export function fetchSecurityQuestion() {
    return {
        type: ACTION.SQ
    }
}

export function addSQ(question) {
    return {
        type: ACTION.SQ_ADD,
        payload : question
    }
}
export function updateSQ(sid) {
    return {
        type: ACTION.SQ_UPDATE,
        payload: sid
    }
}
export function deleteSQ(sid) {
    return {
        type: ACTION.SQ_DELETE,
        payload: sid
    }
}