import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "e914c768c56095d54192f98fa3357816";

  const searchMovies = async () => {
    if (!movieName.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
      );

      const data = await response.json();

      setMovies(data.results || []);
    } catch (err) {
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  const getPopularMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );

      const data = await response.json();

      setMovies(data.results || []);
    } catch (err) {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="both-parents">
      <div className="container">
        <h1>Megersa Movie Search App</h1>

        <input
          type="text"
          placeholder="Search Movie"
          value={movieName}
          onChange={(e) =>
            setMovieName(e.target.value.toUpperCase())
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies();
            }
          }}
        />

        <button
          disabled={!movieName}
          onClick={searchMovies}
        >
          Search
        </button>

        {movieName ? (
          <p>Searching for: {movieName}</p>
        ) : (
          <p>Please enter a movie name</p>
        )}

        <p>Characters: {movieName.length}</p>

        {movieName.length > 10 && (
          <p>Long title</p>
        )}

        <h2>
          {movieName
            ? "Search Results"
            : "Popular Movies"}
        </h2>

        {loading && <h3>Loading...</h3>}

        {error && <p>{error}</p>}

        {!loading && movies.length === 0 && (
          <p>No movies found</p>
        )}

        <div className="movie-list">
          {movies.map((movie) => (
            <div
              className="movie-card"
              key={movie.id}
            >
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}

              <Link
                to={`/movie/${movie.id}`}
                className="movie-link"
              >
                <h3>{movie.title}</h3>
              </Link>

              <p>⭐ {movie.vote_average}</p>

              <p>
                Release Date:
                {" "}
                {movie.release_date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        Built with React by Megersa
      </footer>
    </div>
  );
}

export default Home;