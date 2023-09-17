import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {loadingActions} from "./loadingSlice";

const initialState = {
    movies: [],
    pages: 500
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(loadingActions.setIsLoading(true))

            const {data} = await moviesService.getMovies(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(loadingActions.setIsLoading(false))
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {results} = action.payload
            state.movies = results
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