import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videogameReducer from "../features/videogame/videogameSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videogame: videogameReducer,
  },
});
