import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:'toggle',
    initialState:{
        toggleHam: true,
        suggestions:[]
    },

    reducers:{

        togglefunction: (state) => {
           state.toggleHam = !state.toggleHam;
        } , 

        searchSuggestions: (state,action) => {
             state.suggestions = action.payload;
        } 
      
    }
})

export default toggleSlice.reducer
export const{ togglefunction, searchSuggestions } = toggleSlice.actions