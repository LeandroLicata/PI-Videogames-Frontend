import { setVideogames } from './videogameSlice';
import axios from 'axios';

export const fetchVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/videogames');
      console.log(response.data)
      dispatch(setVideogames(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
