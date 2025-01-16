import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../sevice/api";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import s from "../components/MovieDetails/MovieDetails.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

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
      <Link className={s.goBack} to={goBackLink.current}>
        <MdOutlineKeyboardBackspace />
        Go back
      </Link>
      {movie && <MovieDetails movie={movie} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
      <span className={s.infoLinkBox}>
        <p>Additional information</p>
        <Link className={s.castLink} to="cast">
          Cast
        </Link>
        <Link className={s.reviewLink} to="reviews">
          Reviews
        </Link>
      </span>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
