import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Favorites() {

  const favorites =
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  return (
    <div className="container">

      <h1>❤️ Favorite Movies</h1>
<Link to="/" className="back-home">
  ← Back to Home
</Link>
      {
        favorites.length === 0 && (
          <h2>No favorite movies yet</h2>
        )
      }

      <div className="movie-list">

        {
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        }

      </div>

    </div>
  );
}

export default Favorites;