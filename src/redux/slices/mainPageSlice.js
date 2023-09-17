import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mainPageService} from "../../services";
import {loadingActions} from "./loadingSlice";

const initialState = {
    popular: [],
    topRated: [],
    upcoming: []
}

const getPopular = createAsyncThunk(
    'mainPageSlice/getPopular',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(loadingActions.setIsLoading(true))

            const {data} = await mainPageService.getPopular()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(loadingActions.setIsLoading(false))
        }
    }
)
const getTopRated = createAsyncThunk(
    'mainPageSlice/getTopRated',
    async (_, thunkAPI) => {
        try {
            const {data} = await mainPageService.getTopRated()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getUpcoming = createAsyncThunk(
    'mainPageSlice/getUpcoming',
    async (_, thunkAPI) => {
        try {
            const {data} = await mainPageService.getUpcoming()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getPopular.fulfilled, (state, action) => {
            const {results} = action.payload
            state.popular = results
        }).addCase(getTopRated.fulfilled, (state, action) => {
            const {results} = action.payload
            state.topRated = results
        }).addCase(getUpcoming.fulfilled, (state, action) => {
            const {results} = action.payload
            state.upcoming = results
        })
})

const {reducer: mainPageReducer, actions} = mainPageSlice

const mainPageActions = {
    ...actions,
    getUpcoming,
    getPopular,
    getTopRated
}

export {
    mainPageActions,
    mainPageReducer
}