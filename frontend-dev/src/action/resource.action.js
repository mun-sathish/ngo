import { ACTION } from '../util/Constant'

export const resourceActions = {
    fetchAllBooks,
    fetchAllAudio,
    fetchAllVideo,
    fetchAllTask,
    deleteBook,
    deleteAudio,
    deleteVideo,
    deleteTask,
};

function fetchAllBooks() {
    return {
        type: ACTION.BOOK
    }
}

function fetchAllAudio() {
    return {
        type: ACTION.AUDIO
    }
}

function fetchAllTask() {
    return {
        type: ACTION.TASK
    }
}

function fetchAllVideo() {
    return {
        type: ACTION.VIDEO
    }
}



function deleteBook(id) {
    return {
        type: ACTION.BOOK_DELETE,
        payload: id
    }
}

function deleteAudio(id) {
    return {
        type: ACTION.AUDIO_DELETE,
        payload: id
    }
}

function deleteTask(id) {
    return {
        type: ACTION.TASK_DELETE,
        payload: id
    }
}

function deleteVideo(id) {
    return {
        type: ACTION.VIDEO_DELETE,
        payload: id
    }
}

// function updateBook(book) {
//     return {
//         type: ACTION.BOOK_UPDATE,
//         payload: book
//     }
// }
// function updateAudio(audio) {
//     return {
//         type: ACTION.AUDIO_UPDATE,
//         payload: audio
//     }
// }

// function updateVideo(video) {
//     return {
//         type: ACTION.VIDEO_UPDATE,
//         payload: video
//     }
// }


// function addBook(book) {
//     return {
//         type: ACTION.BOOK_ADD,
//         payload: book
//     }
// }

// function addAudio(audio) {
//     return {
//         type: ACTION.AUDIO_ADD,
//         payload: audio
//     }
// }

// function addTask(task) {
//     return {
//         type: ACTION.TASK_ADD,
//         payload: task
//     }
// }

