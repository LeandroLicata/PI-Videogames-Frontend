import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../features/genre/genreThunks";
import { fetchPlatforms } from "../features/platform/platformThunks";

const useFilters = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    dispatch(fetchGenres())
      .then(() => dispatch(fetchPlatforms()))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching genres and platforms:", error);

        setIsLoading(false);
      });
  }, [dispatch]);

  return {
    genres,
    platforms,
    isLoading,
  };
};

export default useFilters;
