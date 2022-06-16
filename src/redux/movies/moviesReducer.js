import { FETCH_MOVIES_FAILD, FETCH_MOVIES, SET_MOVIES } from "./moviesTypes";

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { isLoading: true };
    case SET_MOVIES:
      return {
        movies: action.movies,
        totalPages: action.totalPages,
        isLoading: false,
      };
    case FETCH_MOVIES_FAILD:
      state = {
        error: action.error,
      };
      return state;
    default:
      return state;
  }
};
export default moviesReducer;
