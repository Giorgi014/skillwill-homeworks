import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchlist } from "../store/watchlistSlice";

const MovieCardComponent = ({ movie }) => {
  const dispatch = useDispatch();
  const isInWatchlist = useSelector((state) =>
    state.watchlist.items.some((item) => item.id === movie.id),
  );

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`} className="movie-card__link">
        <div className="movie-card__poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="movie-card__body">
          <h3>{movie.title}</h3>
          <p className="movie-card__meta">
            {movie.genre} · {movie.year}
          </p>
        </div>
      </Link>
      <button
        className={`movie-card__action${isInWatchlist ? " movie-card__action--active" : ""}`}
        onClick={() => dispatch(toggleWatchlist(movie))}
      >
        {isInWatchlist ? "წაშლა სიიდან" : "დამატება სიაში"}
      </button>
    </div>
  );
};

export const MovieCard = memo(MovieCardComponent);
