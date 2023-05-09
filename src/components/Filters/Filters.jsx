import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGenres } from "../../features/genre/genreThunks";
import { fetchPlatforms } from "../../features/platform/platformThunks";
import { searchVideogames } from "../../features/videogame/videogameThunks";

export default function Filters() {
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
    <div className="container mt-3 card">
      <div className="">
        <div className="my-3">
          <label className="form-label">Genre</label>
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
          <label className="form-label">Platform</label>
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
      </div>
      <form className="">
        <label className="form-label">Name</label>
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="Search..."
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="btn btn-secondary my-3 my-sm-3"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Aply filters
        </button>
      </form>
    </div>
  );
}
