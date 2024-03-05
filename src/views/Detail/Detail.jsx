import { useNavigate } from "react-router-dom";
import useVideogames from "../../hooks/useVideogames";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Screenshots from "../../components/Screenshots/Screenshots";
import parse from "html-react-parser";

export default function Detail() {
  const { videogameStatus, id, videogameDetail, handleDeleteGame } =
    useVideogames();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : videogameDetail !== null ? (
    <div className="container card border-info my-2">
      <h2 className="text-center text-secondary mt-3">
        {videogameDetail.name}
      </h2>
      <div className="row mt-4">
        <div className="col-12 container">
          <div className="text-center">
            <img
              src={videogameDetail.background_image || "/images/no-signal.avif"}
              alt="videogame"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 mt-4">
          <p className="text-info">Platforms</p>
          <p className="">{videogameDetail.platforms.join(", ")}</p>
          <p className="text-info">Genres</p>
          <p className="">{videogameDetail.genres.join(", ")}</p>
          <p className="text-info">Release Date</p>
          <p className="">{videogameDetail.released}</p>
          <p className="text-info">Rating</p>
          <p className="">★{videogameDetail.rating}</p>
        </div>
        <div className="col-md-12 mt-3">
          <p className="text-info">Description</p>
          <div className="">{parse(videogameDetail.description)}</div>
        </div>
      </div>
      {videogameDetail.screenshots?.length ? (
        <Screenshots videogameScreenshots={videogameDetail.screenshots} />
      ) : null}
      <button className="btn btn-outline-secondary my-2" onClick={goBack}>
        Back
      </button>
      {id.length === 24 ? (
        <button className="btn btn-outline-danger my-2" onClick={handleDeleteGame}>
          Delete game
        </button>
      ) : null}
    </div>
  ) : null;
}
