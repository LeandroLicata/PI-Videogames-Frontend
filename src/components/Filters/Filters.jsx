import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  sortByName,
  sortByRating,
  filterByGenre,
  filterByPlatforms,
  filterByOrigin,
} from "../../features/videogame/videogameSlice";
import { fetchGenres } from "../../features/genre/genreThunks";
import { fetchPlatforms } from "../../features/platform/platformThunks";
import { searchVideogames } from "../../features/videogame/videogameThunks";

export default function Filters({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  const [searchedName, setSearchedName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

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

  function handleInputChange(e) {
    e.preventDefault();
    setSearchedName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      searchVideogames({
        name: searchedName,
        genres: selectedGenre,
        platforms: selectedPlatform,
      })
    );
  }

  return (
    <div className="container mt-3">
      <div className="">
        <div className="my-3">
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
        <div className="my-3">
          <label className="form-label">Filter by Genre</label>
          <select
            className="form-select"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All</option>
            {genres?.map((g, i) => (
              <option value={g.slug} key={i}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label className="form-label">Filter by Platform</label>
          <select
            className="form-select"
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="">All</option>
            {platforms?.map((p, i) => (
              <option value={p.id} key={i}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
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
      <form className="d-flex">
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="Search"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="btn btn-secondary my-2 my-sm-0"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
