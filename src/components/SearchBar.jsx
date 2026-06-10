function SearchBar({
  movieName,
  setMovieName,
  searchMovies
}) {
  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Search Movies..."
        value={movieName}
        onChange={(e) =>
          setMovieName(
            e.target.value.toUpperCase()
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchMovies();
          }
        }}
      />

      <button
        disabled={!movieName.trim()}
        onClick={searchMovies}
      >
        🔍 Search
      </button>

    </div>
  );
}

export default SearchBar;