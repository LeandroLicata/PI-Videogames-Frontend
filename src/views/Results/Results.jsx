import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import useVideogames from "../../hooks/useVideogames";
import usePagination from "../../hooks/usePagination";
import Search from "../../components/Search/Search";

export default function Results() {
  const { videogames, videogameStatus } = useVideogames();
  const {
    currentPage,
    setCurrentPage,
    startIndex,
    endIndex,
    setOrder,
    itemsPerPage,
  } = usePagination();

  return (
    <div className="container mt-3">
      <div className="mx-2">
        <Search />
      </div>

      <div>
        {videogameStatus === "loading" ? (
          <Loading />
        ) : videogameStatus === "failed" ? (
          <Error />
        ) : (
          <CardsContainer
            videogames={videogames}
            startIndex={startIndex}
            endIndex={endIndex}
            setOrder={setOrder}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
      <div className="col-12">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={videogames.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
