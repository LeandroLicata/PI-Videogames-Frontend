import { Link } from "react-router-dom";

// RAWG sirve versiones recortadas de sus imágenes: mucho más livianas para las cards
const thumbnail = (url) =>
  url?.includes("media.rawg.io/media/games/")
    ? url.replace("/media/games/", "/media/crop/600/400/games/")
    : url;

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
        className="card border-info mb-3 home-card"
        style={{
          maxWidth: 350,
          height: 300,
          backgroundImage: `url(${thumbnail(background_image) || "/images/no-signal.avif"})`,
        }}
      >
        <div className="card-body d-flex flex-column justify-content-end">
          <div>
            <h4
              className="card-title text-light text"
              style={{ textShadow: "3px 3px 4px #170229" }}
            >
              {name}
            </h4>
            <br/>
            <p
              className="card-text text-info text"
              style={{ textShadow: "1px 1px 2px #170229" }}
            >
              {genres.join(", ")}
            </p>
            <br/>
            <p
              className="card-text text-secondary text"
              style={{ textShadow: "1px 1px 2px #170229" }}
            >
              ★{rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideogameCard;
