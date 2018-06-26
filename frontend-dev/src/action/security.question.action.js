import { ACTION } from '../util/Constant'

export const securityActions = {
    fetchSecurityQuestion,
    addSQ,
    updateSQ,
    deleteSQ
};

function fetchSecurityQuestion() {
    return {
        type: ACTION.SQ
    }
}

function addSQ(question) {
    return {
        type: ACTION.SQ_ADD,
        payload : question
    }
}
function updateSQ(sid) {
    return {
        type: ACTION.SQ_UPDATE,
        payload: sid
    }
}
function deleteSQ(sid) {
    return {
        type: ACTION.SQ_DELETE,
        payload: sid
    }
}