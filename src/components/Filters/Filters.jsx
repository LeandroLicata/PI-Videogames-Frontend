import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  sortByName,
  sortByRating,
  filterByGenre,
  filterByPlatforms,
  filterByOrigin,
} from "../../features/videogame/videogameSlice";
import { fetchGenres } from "../../features/genre/genreThunks";
import { fetchPlatforms } from "../../features/platform/platformThunks";

export default function Filters({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  console.log(genres);
  const platforms = useSelector((state) => state.platform.platforms);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  const handleSort = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    if (selectedValue === "a-z" || selectedValue === "z-a") {
      dispatch(sortByName(selectedValue));
      setOrder(selectedValue);
    } else if (selectedValue === "best" || selectedValue === "worst") {
      dispatch(sortByRating(selectedValue));
      setOrder(selectedValue);
    }
    setCurrentPage(1);
  };

  function handleFilterByGenre(e) {
    dispatch(filterByGenre(e.target.value));
  }

  function handleFilterByPlatform(e) {
    dispatch(filterByPlatforms(e.target.value));
  }

  function handleFilterByOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <select className="form-select" onChange={(e) => handleSort(e)}>
            <option selected disabled>
              Order
            </option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="best">Highest Rating</option>
            <option value="worst">Lowest Rating</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => handleFilterByGenre(e)}
          >
            <option selected disabled>
              Filter by Genre
            </option>
            <option value="all genres">All</option>
            {genres?.map((g, i) => (
              <option value={g.name} key={i}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => handleFilterByPlatform(e)}
          >
            <option selected disabled>
              Filter by Platform
            </option>
            <option value="all platforms">All</option>
            {platforms?.map((p, i) => (
              <option value={p.name} key={i}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => handleFilterByOrigin(e)}
          >
            <option selected disabled>
              Filter by Origin
            </option>
            <option value="all videogames">All</option>
            <option value="created">Created</option>
            <option value="api">Existing</option>
          </select>
        </div>
      </div>
    </div>
  );
}
