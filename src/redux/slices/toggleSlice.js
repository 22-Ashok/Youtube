import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:'toggle',
    initialState:{
        toggleHam: true,
        suggestions:[],
        toggleSuggestion: false,
    },

    reducers:{

        togglefunction: (state) => {
           state.toggleHam = !state.toggleHam;
        } , 

        searchSuggestions: (state,action) => {
             state.suggestions = action.payload;
        } , 

        toggleSuggestionList: (state) => {
            state.toggleSuggestion = !state.toggleSuggestion;
        }
      
    }
})

export default toggleSlice.reducer
export const{ togglefunction, searchSuggestions, toggleSuggestionList } = toggleSlice.actions