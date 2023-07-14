import { useEffect, useState } from "react";

export default function Screenshots({videogameScreenshots}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCarouselClick = () => {
    if (!isFullscreen) {
      const carouselElement = document.getElementById(
        "videogameScreenshotsCarousel"
      );

      if (carouselElement.requestFullscreen) {
        carouselElement.requestFullscreen();
      } else if (carouselElement.mozRequestFullScreen) {
        carouselElement.mozRequestFullScreen();
      } else if (carouselElement.webkitRequestFullscreen) {
        carouselElement.webkitRequestFullscreen();
      } else if (carouselElement.msRequestFullscreen) {
        carouselElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);
  return (
    <div className="col-12 container">
      <div
        id="videogameScreenshotsCarousel"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          {videogameScreenshots.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#videogameScreenshotsCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {videogameScreenshots.map((s, i) => {
            return (
              <div
                key={i}
                className={i === 0 ? "carousel-item active" : "carousel-item"}
              >
                <img
                  src={s}
                  className="d-block w-100 img-fluid"
                  alt={i}
                  onClick={handleCarouselClick}
                />
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videogameScreenshotsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videogameScreenshotsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
