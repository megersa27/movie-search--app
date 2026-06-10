import { useState } from "react";

function useMovies() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey =
    import.meta.env.VITE_TMDB_API_KEY;

  const searchMovies = async (movieName) => {

    if (!movieName.trim()) return;

    try {

      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
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
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );

      const data = await response.json();

      setMovies(data.results || []);

    } catch {

      setError("Failed to load movies.");

    } finally {

      setLoading(false);

    }
  };

  return {
    movies,
    loading,
    error,
    searchMovies,
    getPopularMovies
  };
}

export default useMovies;