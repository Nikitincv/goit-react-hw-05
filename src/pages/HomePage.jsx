import { useEffect, useState } from "react";
import { getTrendingMovie } from "../sevice/api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const results = await getTrendingMovie();
        setMovies(results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
    </div>
  );
};

export default HomePage;
