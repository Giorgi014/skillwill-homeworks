import { Link, useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies, loading } = useMovies();

  if (loading) {
    return (
      <div className="page">
        <p className="state-message">იტვირთება...</p>
      </div>
    );
  }

  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return (
      <div className="page">
        <p className="state-message">ფილმი ვერ მოიძებნა</p>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/movies" className="back-link">
        ← უკან ფილმებზე
      </Link>
      <div className="movie-details">
        <div className="movie-details__poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div>
          <h2 className="movie-details__title">{movie.title}</h2>
          <span className="movie-details__meta">
            {movie.genre} · {movie.year}
          </span>
          <p className="movie-details__description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
