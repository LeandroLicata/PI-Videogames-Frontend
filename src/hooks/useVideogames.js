import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchVideogames } from "../features/videogame/videogameThunks";

const useVideogames = () => {
  const videogames = useSelector((state) => state.videogame.videogames);
  const videogameStatus = useSelector((state) => state.videogame.status);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const genres = searchParams.get("genres");
  const platforms = searchParams.get("platforms");

  useEffect(() => {
    dispatch(searchVideogames({ name, genres, platforms }));
  }, [dispatch, name, genres, platforms]);

  return {
    videogames,
    videogameStatus,
  };
};

export default useVideogames;
