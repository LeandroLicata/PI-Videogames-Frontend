import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVideogames } from "../../features/videogame/videogameThunks";

export default function Home() {
  const videogames = useSelector((state) => state.videogame.videogames);
  const videogameStatus = useSelector((state) => state.videogame.status);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  useEffect(() => {
    videogameStatus === "idle" && dispatch(fetchVideogames());
  }, [videogameStatus, dispatch]);

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : (
    <div>
      <CardsContainer
        videogames={videogames}
        startIndex={startIndex}
        endIndex={endIndex}
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={videogames.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
