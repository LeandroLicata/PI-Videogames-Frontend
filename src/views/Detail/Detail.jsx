import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideogameById } from "../../features/videogame/videogameThunks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import parse from "html-react-parser";

export default function Detail() {
  const dispatch = useDispatch();
  const videogameStatus = useSelector((state) => state.videogame.status);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchVideogameById(id));
  }, [dispatch, id]);

  const videogame = useSelector((state) => state.videogame.detail);
  console.log(videogame);

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : videogame !== null ? (
    <div>
      <h1>{videogame.name}</h1>
      <img src={videogame.background_image} alt="videogame" />
      <div>{parse(videogame.description)}</div>
    </div>
  ) : null;
}
