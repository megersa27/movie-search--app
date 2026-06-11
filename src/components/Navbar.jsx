import { Link } from "react-router-dom";
import { APP_NAME } from "../constants";

function Navbar() {

  const favorites =
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  return (
    <nav className="navbar">

      <h2>🎬 {APP_NAME}</h2>

      <ul>
  <li>
    <Link to="/" className="nav-link">
      Home
    </Link>
  </li>

  <li>
    <Link to="/favorites" className="nav-link">
      Favorites ({favorites.length})
    </Link>
  </li>
</ul>

    </nav>
  );
}

export default Navbar;