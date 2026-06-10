import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

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
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`,
      );

      const data = await response.json();

      setMovies(data.results || []);
    } catch {
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
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
      );

      const data = await response.json();

      setMovies(data.results || []);
    } catch {
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
      <Navbar />

      <section className="hero">
        <h1>Discover Your Favorite Movies</h1>

        <p>Search millions of movies and explore details.</p>
      </section>

      <div className="container">
        <h1>Megersa Movie Search App</h1>

        <SearchBar
          movieName={movieName}
          setMovieName={setMovieName}
          searchMovies={searchMovies}
        />

        {movieName ? (
          <p>Searching for: {movieName}</p>
        ) : (
          <p>Please enter a movie name</p>
        )}

        <p>Characters: {movieName.length}</p>

        {movieName.length > 10 && <p>Long title</p>}

        <h2>{movieName ? "Searched Results" : "Popular Movies"}</h2>

        <h3>Movies Found: {movies.length}</h3>

        {loading && <h3>Loading...</h3>}

        {error && <p>{error}</p>}

        {!loading && movies.length === 0 && <p>No movies found</p>}

        <div className="movie-list">
          {movies.map((movie) => (
  <MovieCard
    key={movie.id}
    movie={movie}
  />
))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
