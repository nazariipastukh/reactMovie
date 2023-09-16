import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";
import {loadingActions} from "./loadingSlice";

const initialState = {
    genres: [],
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(loadingActions.setIsLoading(true))

            const {data} = await genresService.getGenres()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(loadingActions.setIsLoading(false))
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {genres} = action.payload
            state.genres = genres
        })
})

const {reducer: genresReducer, actions} = genresSlice

const genresActions = {
    ...actions,
    getAll
}

export {
    genresReducer,
    genresActions
}