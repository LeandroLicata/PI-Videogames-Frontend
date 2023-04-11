import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Welcome to the videogames page!!!</h1>
      <Link to="/home">
        <button>Press Start Button</button>
      </Link>
    </div>
  );
}
