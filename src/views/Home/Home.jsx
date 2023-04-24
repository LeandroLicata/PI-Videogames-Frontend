import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import NavBar from "../../components/NavBar/NavBar";
import Filters from "../../components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVideogames } from "../../features/videogame/videogameThunks";

export default function Home() {
  const videogames = useSelector((state) => state.videogame.videogames);
  const videogameStatus = useSelector((state) => state.videogame.status);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 16;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  useEffect(() => {
    videogameStatus === "idle" && dispatch(fetchVideogames());
  }, [videogameStatus, dispatch]);

  const [order, setOrder] = useState("");

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : (
    <>
      <NavBar />
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12">
            <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
          </div>
          <div className="col-12">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={videogames.length}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
          <div className="col-12">
            <CardsContainer
              videogames={videogames}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </div>
          <div className="col-12">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={videogames.length}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
