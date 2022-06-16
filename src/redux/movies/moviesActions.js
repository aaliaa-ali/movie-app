import { FETCH_MOVIES_FAILD, FETCH_MOVIES, SET_MOVIES } from "./moviesTypes";

export const fetchMovies = (pageNum,searchKey) => ({
  type: FETCH_MOVIES,
  isLoading: true,
  pageNum,
  searchKey,
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  isLoading: false,
  movies:payload.movies,
  totalPages:payload.totalPages,

});
export const fetchMoviesFalier = (error) => ({
  type: FETCH_MOVIES_FAILD,
  isLoading: false,
  error,
});
