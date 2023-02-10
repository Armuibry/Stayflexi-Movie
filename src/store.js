import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {movie:""}

export const movieSlice = createSlice({
    name:"Movie Slice",
    initialState,
    reducers:{
        addMovie: (state,action) => {
            state.movie = action.payload
        }
    }
})

export const movieAction = movieSlice.actions;

const store = configureStore({
    reducer:{movieState: movieSlice.reducer}
})

export default store;
