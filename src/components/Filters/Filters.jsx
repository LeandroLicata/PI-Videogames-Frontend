import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  sortByName,
  sortByRating,
  filterByGenre,
} from "../../features/videogame/videogameSlice";
import { fetchGenres } from "../../features/genre/genreThunks";
import { fetchPlatforms } from "../../features/platform/platformThunks";

export default function Filters({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  console.log(genres)
  const platforms = useSelector((state) => state.platform.platforms);

  useEffect(() => {
    dispatch(fetchGenres());
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

  function handleFilter(e) {
    dispatch(filterByGenre(e.target.value));
  }

  return (
    <div>
      <select
        className="select"
        defaultValue="default"
        onChange={(e) => handleSort(e)}
      >
        <option value="default" disabled>
          Order
        </option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="best">Highest Rating</option>
        <option value="worst">Lowest Rating</option>
      </select>
      <select
        className="select"
        defaultValue="default"
        onChange={(e) => handleFilter(e)}
      >
        <option value="default" disabled>
          Filter
        </option>
        <option value="all genres">All</option>
        {genres?.map((g, i) => (
          <option value={g.name} key={i}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
}
