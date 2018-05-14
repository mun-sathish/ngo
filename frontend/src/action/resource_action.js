import { ACTION } from '../util/constants'

export function fetchAllBooks() {
    return {
        type: ACTION.BOOK,
    }
}

export function fetchAllAudio() {
    return {
        type: ACTION.AUDIO,
    }
}

export function fetchAllVideo() {
    return {
        type: ACTION.VIDEO,
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

export function addVideo(video) {
    return {
        type: ACTION.VIDEO_ADD,
        payload: video
    }
}