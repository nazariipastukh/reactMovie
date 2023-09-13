import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
}

const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: {}
})

const {reducer: loadingReducer, actions: loadingActions} = loadingSlice

export {
    loadingReducer,
    loadingActions
}