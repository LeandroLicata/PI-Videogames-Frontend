import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideogameById,
  deleteVideogame,
} from "../../features/videogame/videogameThunks";
import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Screenshots from "../../components/Screenshots/Screenshots";
import parse from "html-react-parser";
import Swal from "sweetalert2";

export default function Detail() {
  const dispatch = useDispatch();
  const videogameStatus = useSelector((state) => state.videogame.status);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchVideogameById(id));
  }, [dispatch, id]);

  const videogame = useSelector((state) => state.videogame.detail);

  const handleDeleteGame = () => {
    dispatch(deleteVideogame(id))
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Game Deleted",
          text: "The game has been successfully deleted",
        }).then(() => {
          navigate("/");
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while deleting the video game.",
        });
      });
  };

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : videogame !== null ? (
    <div className="container card border-info my-2">
      <h2 className="text-center text-secondary mt-3">{videogame.name}</h2>
      <div className="row mt-4">
        <div className="col-12 container">
          <div className="text-center">
            <img
              src={videogame.background_image || "/images/no-signal.avif"}
              alt="image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 mt-4">
          <p className="text-info">Platforms</p>
          <p className="">{videogame.platforms.join(", ")}</p>
          <p className="text-info">Genres</p>
          <p className="">{videogame.genres.join(", ")}</p>
          <p className="text-info">Release Date</p>
          <p className="">{videogame.released}</p>
          <p className="text-info">Rating</p>
          <p className="">★{videogame.rating}</p>
        </div>
        <div className="col-md-12 mt-4">
          <p className="text-info">Description</p>
          <div className="">{parse(videogame.description)}</div>
        </div>
      </div>
      {videogame.screenshots?.length ? (
        <Screenshots videogameScreenshots={videogame.screenshots} />
      ) : null}
      <NavLink to="/" className="btn btn-outline-secondary my-2" role="button">
        Back
      </NavLink>
      {id.length === 24 ? (
        <btn className="btn btn-outline-danger my-2" onClick={handleDeleteGame}>
          Delete game
        </btn>
      ) : null}
    </div>
  ) : null;
}
