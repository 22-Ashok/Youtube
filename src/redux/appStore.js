import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './slices/toggleSlice'
import searchSliceReducer from './slices/searchSlice'

const store = configureStore({
    reducer:{
        toggle:toggleReducer,
        searchList:searchSliceReducer
    }
})

export default store;