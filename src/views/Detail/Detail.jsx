import { useDispatch, useSelector } from "react-redux";
import { fetchVideogameById } from "../../features/videogame/videogameThunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";

export default function Detail() {
  const dispatch = useDispatch();
  const videogameStatus = useSelector((state) => state.videogame.status);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchVideogameById(id));
  }, [dispatch, id]);

  const videogame = useSelector((state) => state.videogame.detail);

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : videogame !== null ? (
    <div className="container">
      <h2 className="text-center text-success mt-3">{videogame.name}</h2>
      <Row className="mt-4">
        <Col md={6}>
        <Image src={videogame.background_image} fluid />
        </Col>
        <Col md={6}>
        <p className="text-info mt-4">Genres</p>
          <p className="">{videogame.genres.join(", ")}</p>
          <p className="text-info">Platforms</p>
          <p className="">{videogame.platforms.join(", ")}</p>
          <p className="text-info">Release Date</p>
          <p className="">{videogame.released}</p>
          <p className="text-info">Rating</p>
          <p className="">★{videogame.rating}</p>
         
        </Col>
        <Col md={12}>
          
          <p className="text-info">Description</p>
          <div className="">{parse(videogame.description)}</div>
          <NavLink to="/home" className="text-info">
            Back
          </NavLink>
        </Col>
      </Row>
    </div>
  ) : null;
}
