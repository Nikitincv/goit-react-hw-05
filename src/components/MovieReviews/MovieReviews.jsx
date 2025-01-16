import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../sevice/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieReviews(movieId);

        setReviews(results);
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
      <ul className={s.revBox}>
        {reviews.map((item) => (
          <li key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
            <TfiLayoutLineSolid className={s.revLine} />
          </li>
        ))}
      </ul>

      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
    </div>
  );
};

export default MovieReviews;
