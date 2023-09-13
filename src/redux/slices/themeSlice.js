import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    themeCheck: localStorage.getItem('theme') === 'true'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeThemeCheck: state => {
            state.themeCheck = !state.themeCheck
            localStorage.setItem('theme', state.themeCheck)
        }
    },
    extraReducers: {}
})

const {reducer: themeReducer, actions: themeActions} = themeSlice

export {
    themeActions,
    themeReducer
}