import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../sevice/api";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieById(movieId);
        setMovie(results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      {movie && <MovieDetails movie={movie} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
