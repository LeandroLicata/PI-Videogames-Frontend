import { Link } from "react-router-dom";

export default function NavBar() {
  const imageUrls = [
    "images/black-mage.gif",
    "images/crash-bandicoot.gif",
    "images/mario.gif",
    "images/ryu.gif",
    "images/sub-zero.gif",
    // Agrega aquí las rutas de tus imágenes adicionales
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const selectedImageUrl = imageUrls[randomIndex];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <div className="col-md-8">
          <div className="navbar-brand text-warning">
            <img src="images/sub-zero.gif" alt="Logo" style={{ height: 40 }} />
            Videogames
            <img src="images/ryu.gif" alt="Logo" style={{ height: 40 }} />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addVideogame">
                Add videogame
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
