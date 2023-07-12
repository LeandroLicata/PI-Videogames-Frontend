import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Filters from "../../components/Filters/Filters";
import useVideogames from "../../hooks/useVideogames";
import usePagination from "../../hooks/usePagination";

export default function Home() {
  const { videogames, videogameStatus } = useVideogames();
  const { currentPage, setCurrentPage, startIndex, endIndex, setOrder, itemsPerPage } =
    usePagination();
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Filters />
        </div>
        <div className="text-center col-md-6 d-none d-md-block">
          <img
            src="/images/tachikoma.png"
            alt="landing"
            className="img-fluid"
          />
        </div>

        <div className="">
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
    </div>
  );
}
