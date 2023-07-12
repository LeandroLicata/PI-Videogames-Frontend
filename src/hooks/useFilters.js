import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../features/genre/genreThunks";
import { fetchPlatforms } from "../features/platform/platformThunks";

const useFilters = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);
  return {
    genres, platforms
  }
}

export default useFilters;