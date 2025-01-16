import { useEffect, useState } from "react";
import { getMovieCredits } from "../../sevice/api";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import s from "./MovieCast.module.css";

const defaultImg =
  "https://www.hollywoodmegastore.com/pub/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/3/4/3445d_small_trophy_personalized_lrg.jpg";
const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieCredits(movieId);

        setCast(results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div className={s.castBox}>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              className={s.itemImg}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              alt={item.name}
            />
            <p className={s.itemName}>{item.name}</p>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
    </div>
  );
};
export default MovieCast;
