import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";
import {loadingActions} from "./loadingSlice";

const initialState = {
    moviesByGenre: [],
    pages: 0
}

const getMoviesByGenre = createAsyncThunk(
    'moviesByGenre/getByGenre',
    async ({id, page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(loadingActions.setIsLoading(true))


            const {data} = await genresService.getByGenre(id, page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(loadingActions.setIsLoading(false))
        }
    }
)

const moviesByGenreSlice = createSlice({
    name: 'moviesByGenreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMoviesByGenre.fulfilled, (state, action) => {
            const {total_pages, results} = action.payload
            state.moviesByGenre = results
            state.pages = total_pages
        })
})

const {reducer: movieByGenreReducer, actions} = moviesByGenreSlice

const movieByGenreActions = {
    ...actions,
    getMoviesByGenre
}

export {
    movieByGenreReducer,
    movieByGenreActions
}