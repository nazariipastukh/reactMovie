import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer, themeReducer, loadingReducer, genresReducer, movieByGenreReducer} from './slices'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        theme: themeReducer,
        loading: loadingReducer,
        genres: genresReducer,
        moviesByGenre: movieByGenreReducer
    },
})