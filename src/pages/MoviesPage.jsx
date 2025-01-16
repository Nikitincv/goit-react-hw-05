import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { getMovieByQuery } from "../sevice/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [searchParams]);
  const handelSubmit = (query) => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SearchBar onSubmit={handelSubmit} />
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
    </div>
  );
};

export default MoviesPage;
