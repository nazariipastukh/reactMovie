import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {castService} from "../../services";
import {loadingActions} from "./loadingSlice";

const initialState = {
    cast: [],
    crew: []
}

const getCredits = createAsyncThunk(
    'castSlice/getCredits',
    async (id, thunkAPI) => {
        try {
            const {data} = await castService.getCast(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(loadingActions.setIsLoading(false))
        }
    }
)

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCredits.fulfilled, (state, action) => {
            const {cast, crew} = action.payload
            state.cast = cast
            state.crew = crew
        })
})

const {reducer: castReducer, actions} = castSlice

const castActions = {
    ...actions,
    getCredits
}

export {
    castReducer,
    castActions
}