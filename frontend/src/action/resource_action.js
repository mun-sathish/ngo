import { ACTION } from '../util/constants'


export function fetchAllBooks() {
    return {
        type: ACTION.BOOK
    }
}

export function fetchAllAudio() {
    return {
        type: ACTION.AUDIO
    }
}

export function fetchAllVideo() {
    return {
        type: ACTION.VIDEO
    }
}

export function addBook(book) {
    return {
        type: ACTION.BOOK_ADD,
        payload: book
    }
}

export function addAudio(audio) {
    return {
        type: ACTION.AUDIO_ADD,
        payload: audio
    }
}


export function updateBook(book) {
    return {
        type: ACTION.BOOK_UPDATE,
        payload: book
    }
}
export function updateAudio(audio) {
    return {
        type: ACTION.AUDIO_UPDATE,
        payload: audio
    }
}

export function updateVideo(video) {
    return {
        type: ACTION.VIDEO_UPDATE,
        payload: video
    }
}




export function deleteBook(id) {
    return {
        type: ACTION.BOOK_DELETE,
        payload: id
    }
}

export function deleteAudio(id) {
    return {
        type: ACTION.AUDIO_DELETE,
        payload: id
    }
}

export function deleteVideo(id) {
    return {
        type: ACTION.VIDEO_DELETE,
        payload: id
    }
}