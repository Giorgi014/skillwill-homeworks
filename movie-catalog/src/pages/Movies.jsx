import { useMemo, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { movies, loading } = useMovies();
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("ყველა");

  const filteredMovies = useMemo(() => {
    return movies.filter((m) => {
      const matchesSearch = m.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesGenre = genre === "ყველა" || m.genre === genre;
      return matchesSearch && matchesGenre;
    });
  }, [movies, search, genre]);

  const genres = useMemo(() => {
    return ["ყველა", ...new Set(movies.map((m) => m.genre))];
  }, [movies]);

  if (loading) {
    return (
      <div className="page">
        <p className="state-message">იტვირთება...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="movies-header">
        <span className="eyebrow">კატალოგი</span>
        <h1>ფილმები და სერიალები</h1>
      </div>

      <div className="movies-filters">
        <input
          type="text"
          placeholder="ძებნა სათაურით..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="movies-empty">ვერაფერი მოიძებნა თქვენი მოთხოვნით.</p>
      )}
    </div>
  );
};

export default Movies;
