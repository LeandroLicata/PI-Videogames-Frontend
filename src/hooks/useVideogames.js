import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideogames } from "../features/videogame/videogameThunks";

const useVideogames = () => {
  const videogames = useSelector((state) => state.videogame.videogames);
  const videogameStatus = useSelector((state) => state.videogame.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      videogameStatus === "idle" ||
      videogameStatus === "added succeeded" ||
      videogameStatus === "game deleted"
    ) {
      dispatch(fetchVideogames());
    }
  }, [dispatch, videogameStatus]);

  return {
    videogames,
    videogameStatus,
  };
};

export default useVideogames;
