import { Link } from "react-router-dom";

export default function Card({ id, name, genres, background_image }) {
  return (
    <Link to={`detail/${id}`}>
      <div>
        <h4>{name}</h4>
        <img src={background_image} alt="videogame" width={300}/>
        <p>{genres.join(", ")}</p>
      </div>
    </Link>
  );
}
