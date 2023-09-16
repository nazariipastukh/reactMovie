import {configureStore} from "@reduxjs/toolkit";
import {
    moviesReducer,
    themeReducer,
    loadingReducer,
    genresReducer,
    movieByGenreReducer,
    movieByIdReducer,
    castReducer
    // searchReducer
} from './slices'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        theme: themeReducer,
        loading: loadingReducer,
        genres: genresReducer,
        moviesByGenre: movieByGenreReducer,
        movieById: movieByIdReducer,
        cast: castReducer
        // search: searchReducer
    },
})