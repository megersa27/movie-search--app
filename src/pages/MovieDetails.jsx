import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = "e914c768c56095d54192f98fa3357816";

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );

      const data = await response.json();

      setMovie(data);
    } catch (err) {
      setError("Failed to load movie details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="details-container">

      <Link to="/">
        <button>
          Back Home
        </button>
      </Link>

      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>
        ⭐ Rating: {movie.vote_average}
      </p>

      <p>
        📅 Release Date: {movie.release_date}
      </p>

      <p>
        ⏱ Runtime: {movie.runtime} minutes
      </p>

      <p>
        🎭 Genres:
        {" "}
        {movie.genres
          ?.map((genre) => genre.name)
          .join(", ")}
      </p>

      <p>
        📝 {movie.overview}
      </p>

    </div>
  );
}

export default MovieDetails;