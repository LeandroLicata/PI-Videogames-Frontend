import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVideogames } from "../../features/videogame/videogameThunks";

export default function Home() {
  const videogames = useSelector((state) => state.videogame.videogames);
  console.log("videogames", videogames)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideogames());
  }, []);
  return (
    <div>
      <CardsContainer videogames={videogames} />
    </div>
  );
}
