import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {loadingActions} from "./loadingSlice";

const initialState = {
    movieById: null,
}

const getMovieById = createAsyncThunk(
    'movieById/getMovieById',
    async (id, thunkAPI) => {
        try {
            thunkAPI.dispatch(loadingActions.setIsLoading(true))

            const {data} = await moviesService.getMovieById(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(loadingActions.setIsLoading(false))
        }
    }
)

const movieByIdSlice = createSlice({
    name: 'moviesByIdSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieById.pending, state => {
            state.movieById = null
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movieById = action.payload
        })
})

const {reducer: movieByIdReducer, actions} = movieByIdSlice

const movieByIdActions = {
    ...actions,
    getMovieById
}

export {
    movieByIdReducer,
    movieByIdActions
}