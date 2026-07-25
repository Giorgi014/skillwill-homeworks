import { useState, useEffect } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading };
};

export default useMovies;
