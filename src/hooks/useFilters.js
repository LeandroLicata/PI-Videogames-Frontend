import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../features/genre/genreThunks";
import { fetchPlatforms } from "../features/platform/platformThunks";

const useFilters = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  const alreadyLoaded = genres.length > 0 && platforms.length > 0;
  const [isLoading, setIsLoading] = useState(!alreadyLoaded);

  useEffect(() => {
    // Ya están en el store: no volvemos a pedirlos
    if (alreadyLoaded) return;

    setIsLoading(true);
    Promise.all([dispatch(fetchGenres()), dispatch(fetchPlatforms())])
      .catch((error) => {
        console.error("Error fetching genres and platforms:", error);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    genres,
    platforms,
    isLoading,
  };
};

export default useFilters;
