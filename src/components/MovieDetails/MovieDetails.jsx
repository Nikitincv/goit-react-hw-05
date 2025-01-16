import s from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const year = movie.release_date.split("-")[0];

  return (
    <div className={s.parent}>
      <img
        className={s.posterImg}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={s.infoBox}>
        <h2>
          {movie.title} ({year})
        </h2>
        <p>User Vote: {parseFloat(movie.vote_average.toFixed(1))}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>{movie.genres.map((item) => item.name).join(", ")}</ul>
      </div>
    </div>
  );
};

export default MovieDetails;
