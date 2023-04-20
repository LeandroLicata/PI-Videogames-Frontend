import { createSlice } from "@reduxjs/toolkit";
import { fetchVideogames, fetchVideogameById } from "./videogameThunks";

const initialState = {
  videogames: [],
  allVideogames: [],
  status: "idle",
  error: null,
  detail: null,
};

export const videogameSlice = createSlice({
  name: "videogame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.videogames = action.payload;
      state.allVideogames = action.payload;
    });
    builder.addCase(fetchVideogames.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchVideogameById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchVideogameById.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.detail = action.payload;
    });
    builder.addCase(fetchVideogameById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default videogameSlice.reducer;
