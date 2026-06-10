import { Link } from "react-router-dom";
import imageUrl from "../utils/imageUrl";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      {movie.poster_path ? (
        <img
          src={imageUrl(movie.poster_path)}
          alt={movie.title}
        />
      ) : (
        <div className="no-poster">
          No Poster Available
        </div>
      )}

      <Link
        to={`/movie/${movie.id}`}
        className="movie-link"
      >
        <h3>{movie.title}</h3>
      </Link>

      <p>⭐ {movie.vote_average}</p>

      {movie.vote_average >= 8 && (
        <p>⭐ Top Rated</p>
      )}

      <p>
        Release Date: {movie.release_date}
      </p>

    </div>
  );
}

export default MovieCard;