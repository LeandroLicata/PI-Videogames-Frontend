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
  reducers: {
    sortByName: (state, action) => {
      let sortedVideogames =
        action.payload === "a-z"
          ? [...state.videogames].sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : [...state.videogames].sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      state.videogames = sortedVideogames;
    },
    sortByRating: (state, action) => {
      let sortedVideogames =
        action.payload === "best"
          ? [...state.videogames].sort(function (a, b) {
              return b.rating - a.rating;
            })
          : [...state.videogames].sort(function (a, b) {
              return a.rating - b.rating;
            });
      return {
        ...state,
        videogames: sortedVideogames,
      };
    },
  },
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

export const { sortByName, sortByRating } = videogameSlice.actions;

export default videogameSlice.reducer;
