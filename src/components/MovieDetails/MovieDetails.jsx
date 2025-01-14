const MovieDetails = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <ul>{movie.genres.map((item) => item.name).join(", ")}</ul>
    </div>
  );
};

export default MovieDetails;
