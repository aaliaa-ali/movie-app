import { FETCH_MOVIES_FAILD, FETCH_MOVIES, SET_MOVIES } from "./moviesTypes";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
     
      return state;
    case SET_MOVIES:
      return action.payload;
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
