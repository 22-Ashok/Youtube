import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'searchList',
    initialState:{},

    reducers: {
        addSearchList: (state,action) => {
            return { ...state, ...action.payload }
        },

        removeSearch: (state) => {
             return {};
        }
    }
})

export const{addSearchList, removeSearch} = searchSlice.actions;
export default searchSlice.reducer;