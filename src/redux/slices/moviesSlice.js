import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    pages: 0
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getMovies(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {results, total_pages} = action.payload
            state.movies = results
            state.pages = total_pages
        })
})

const {reducer: moviesReducer, actions} = moviesSlice

const movieActions = {
    ...actions,
    getAll
}

export {
    moviesReducer,
    movieActions
}