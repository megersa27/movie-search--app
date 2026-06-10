import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

function Home() {
  const [movieName, setMovieName] = useState("");
  
  const {
  movies,
  loading,
  error,
  searchMovies,
  getPopularMovies
} = useMovies();

  const apiKey =
  import.meta.env.VITE_TMDB_API_KEY;

  
 
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
  searchMovies={() =>
    searchMovies(movieName)
  }
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
