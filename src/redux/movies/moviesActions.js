import { FETCH_MOVIES_FAILD, FETCH_MOVIES, SET_MOVIES } from "./moviesTypes";

export const fetchMovies = () => ({
  type: FETCH_MOVIES,
  isLoading: true,
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  isLoading: false,
  payload,
});
export const fetchMoviesFalier = (error) => ({
  type: FETCH_MOVIES_FAILD,
  isLoading: false,
  error,
});
