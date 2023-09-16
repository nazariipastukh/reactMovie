// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {searchService} from "../../services";
// import {loadingActions} from "./loadingSlice";
//
// const initialState = {
//     searchResult: [],
//     pages: 0
// }
//
// const getResults = createAsyncThunk(
//     'searchResults/getResults',
//     async (inputValue, thunkAPI) => {
//         try {
//             thunkAPI.dispatch(loadingActions.setIsLoading(true))
//
//             const {data} = await searchService.getSearchResult(inputValue)
//             return data
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         } finally {
//             thunkAPI.dispatch(loadingActions.setIsLoading(false))
//         }
//     }
// )
//
// const searchSlice = createSlice({
//     name: 'searchSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder => builder
//         .addCase(getResults.fulfilled, (state, action) => {
//             const {total_pages, results} = action.payload
//             state.searchResult = results
//             state.pages = total_pages
//         })
// })
//
// const {reducer: searchReducer, actions} = searchSlice
//
// const searchActions = {
//     ...actions,
//     getResults
// }
//
// export {
//     searchReducer,
//     searchActions
// }