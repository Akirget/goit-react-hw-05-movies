import axios from 'axios';

const API_KEY = '8a9652bb26671496507850b18d700d89';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const { data } = await axios(`trending/movie/day?api_key=${API_KEY}`);

  return data.results;
}

export async function searchMovies(searchQuery) {
  const { data } = await axios(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );

  return data.results;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios(`movie/${movieId}?api_key=${API_KEY}`);

  return data;
}

export async function getMovieCredits(movieId) {
  const { data } = await axios(`movie/${movieId}/credits?api_key=${API_KEY}`);

  return data.cast;
}

export async function getMovieReviews(movieId) {
  const { data } = await axios(`movie/${movieId}/reviews?api_key=${API_KEY}`);

  return data.results;
}
