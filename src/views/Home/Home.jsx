import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVideogames } from "../../features/videogame/videogameThunks";

export default function Home() {
  const videogames = useSelector((state) => state.videogame.videogames);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    dispatch(fetchVideogames());
  }, [dispatch]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return (
    <div>
      <CardsContainer videogames={videogames} startIndex={startIndex} endIndex={endIndex}/>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={videogames.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
