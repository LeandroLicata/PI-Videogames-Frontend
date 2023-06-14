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
    <Link to={`/detail/${id}`} className="text-decoration-none">
      <div
        className="card border-info mb-3"
        style={{
          maxWidth: 350,
          height: 300,
          backgroundImage: `url(${background_image})`,
        }}
      >
        <div className="card-body d-flex flex-column justify-content-end">
          <h4
            className="card-title text-light"
            style={{ textShadow: "3px 3px 4px #170229" }}
          >
            {name}
          </h4>
          <p
            className="card-text text-info"
            style={{ textShadow: "1px 1px 2px #170229" }}
          >
            {genres.join(", ")}
          </p>
          <p
            className="card-text text-secondary"
            style={{ textShadow: "1px 1px 2px #170229" }}
          >
            ★{rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideogameCard;
