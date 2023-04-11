import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videogames: [],
  genres: [],
  platforms: [],
  allVideogames: [],
  detail: null,
};

export const videogameSlice = createSlice({
  name: "videogame",
  initialState,
  reducers: {
    setVideogames: (state, action) => {
      state.videogames = action.payload;
      state.allVideogames = action.payload;
    },
  },
});

export const { setVideogames } = videogameSlice.actions;

export default videogameSlice.reducer;
