import { Link } from "react-router-dom";

const VideogameCard = ({
  id,
  name,
  genres,
  background_image,
  rating,
  short_screenshots,
}) => {
  return (
    <div
      className="card border-warning mb-3 overflow-auto d-flex flex-column justify-content-end"
      style={{
        maxWidth: 350,
        height: 300,
        backgroundImage: `url(${background_image})`,
      }}
    >
      <Link to={`/detail/${id}`} className="text-decoration-none">
        <div className="card-body">
          <h5
            className="card-title text-success"
            style={{ textShadow: "1px 1px #170229" }}
          >
            {name}
          </h5>
          <p
            className="card-text text-light"
            style={{ textShadow: "1px 1px #170229" }}
          >
            {genres.join(", ")}
          </p>
          <p
            className="card-text text-info"
            style={{ textShadow: "1px 1px #170229" }}
          >
            ★{rating}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideogameCard;
