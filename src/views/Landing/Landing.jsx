import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row mt-4 mb-4">
          <h3 className="col-12 text-center">Welcome to the videogames page!!!</h3>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img src="/images/sub-zero.gif" alt="sub-zero" height={250} />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <NavLink to="/home">
              <button className="btn btn-outline-warning">Press Start Button</button>
            </NavLink>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img src="/images/ryu.gif" alt="ryu" height={250} />
          </div>
        </div>
      </div>
    </div>
  );
}

