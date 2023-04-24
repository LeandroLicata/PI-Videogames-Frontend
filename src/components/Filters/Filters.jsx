import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  sortByName,
  sortByRating,
} from "../../features/videogame/videogameSlice";

export default function Filters({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

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
    </div>
  );
}

