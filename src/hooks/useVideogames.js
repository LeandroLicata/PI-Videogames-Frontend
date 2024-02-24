import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  searchVideogames,
  fetchVideogameById,
  deleteVideogame,
} from "../features/videogame/videogameThunks";
import Swal from "sweetalert2";

const useVideogames = () => {
  const videogames = useSelector((state) => state.videogame.videogames);
  const videogameStatus = useSelector((state) => state.videogame.status);
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const videogameDetail = useSelector((state) => state.videogame.detail);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const genres = searchParams.get("genres");
  const platforms = searchParams.get("platforms");

  useEffect(() => {
    dispatch(searchVideogames({ name, genres, platforms }));
  }, [dispatch, name, genres, platforms]);

  useEffect(() => {
    dispatch(fetchVideogameById(id));
  }, [dispatch, id]);

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

  return {
    videogames,
    videogameStatus,
    id,
    videogameDetail,
    handleDeleteGame,
  };
};

export default useVideogames;
