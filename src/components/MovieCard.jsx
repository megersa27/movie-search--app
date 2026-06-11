import { Link } from "react-router-dom";
import imageUrl from "../utils/imageUrl";

function MovieCard({ movie }) {
const addFavorite = (movie) => {

  const favorites =
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  const exists =
    favorites.find(
      (item) => item.id === movie.id
    );

  if (exists) {
    alert("Already added");
    return;
  }

  favorites.push(movie);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("Added to favorites");
};

const favorites =
  JSON.parse(
    localStorage.getItem("favorites")
  ) || [];

const isFavorite =
  favorites.some(
    (item) => item.id === movie.id
  );
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
     <button
  disabled={isFavorite}
  onClick={() => addFavorite(movie)}
>
  {
    isFavorite
      ? "❤️ Added"
      : "❤️ Favorite"
  }
</button>

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