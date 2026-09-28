import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchVideogameById,
  deleteVideogame,
} from "../features/videogame/videogameThunks";
import Swal from "sweetalert2";

const useVideogameDetail = () => {
  const videogameStatus = useSelector((state) => state.videogame.status);
  const videogameDetail = useSelector((state) => state.videogame.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(fetchVideogameById(id));
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
    videogameStatus,
    id,
    videogameDetail,
    handleDeleteGame,
  };
};

export default useVideogameDetail;
