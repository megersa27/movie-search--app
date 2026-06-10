import { APP_NAME } from "../constants";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 {APP_NAME}</h2>

      <ul>
        <li>Home</li>
        <li>Popular</li>
        <li>Top Rated</li>
      </ul>
    </nav>
  );
}
export default Navbar