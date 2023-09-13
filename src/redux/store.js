import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer, themeReducer, loadingReducer} from './slices'


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        theme: themeReducer,
        loading: loadingReducer
    },
})