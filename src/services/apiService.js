import axios from "axios";

const baseURL = process.env.REACT_APP_API

export const apiService = axios.create({
    baseURL,
    headers: {
        Authorization:
            `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZlYzZkMzViZmZhYThlYjBhOTBkNzVlNDQwNjY3NyIsInN1YiI6IjY0ZjBkMDM3NWYyYjhkMDEzOWNjZjkwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rdnj-Co8OEGnTI36IKMb-uVSQb9G3jWfWbo1x9ety3c`
    }
})