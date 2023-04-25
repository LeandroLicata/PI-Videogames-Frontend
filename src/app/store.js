import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videogameReducer from "../features/videogame/videogameSlice";
import genreReducer from "../features/genre/genreSlice";
import platformReducer from "../features/platform/platformSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videogame: videogameReducer,
    genre: genreReducer,
    platform: platformReducer,
  },
});
