import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideogameCard = ({
  id,
  name,
  genres,
  background_image,
  rating,
  short_screenshots,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calcula el índice de la siguiente imagen
      const nextIndex = (activeIndex + 1) % short_screenshots.length;
      setActiveIndex(nextIndex);
    }, 3000); // Cambiar cada 3 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [activeIndex, short_screenshots.length]);

  return (
    <div
      className="card border-warning mb-3 overflow-auto"
      style={{ maxWidth: 350, height: 300 }}
    >
      <Link to={`/detail/${id}`} className="text-decoration-none">
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {short_screenshots &&
              short_screenshots.map((s, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <img className="d-block w-100" src={s} alt={`slide-${index}`} />
                </div>
              ))}
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title text-danger">{name}</h5>
          <p className="card-text text-info">{genres.join(", ")}</p>
          <p className="card-text text-info">{rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideogameCard;
