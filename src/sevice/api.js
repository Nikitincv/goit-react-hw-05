import axios from "axios";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTZmZDhiNGNmYTQ1NjZhYjYwNDE3NThkNzE2ZGUyNiIsIm5iZiI6MTczNTQ4OTAzMS4yMTI5OTk4LCJzdWIiOiI2NzcxNzYwN2I3MDAxM2NjMGY2MTRjNzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7bmuIIO7f1539c88E4Q_8__R4K372k1m05wpkAgMTqw";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common.Authorization = `Bearer ${API_TOKEN}`;

export const getTrendingMovie = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};

export const getMovieByQuery = async (query) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}?include_adult=false&language=en-US&page=1`
  );
  return data;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?include_adult=false&language=en-US&page=1`
  );
  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?include_adult=false&language=en-US&page=1`
  );
  return data.results;
};
