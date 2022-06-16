import { combineReducers } from "redux";
import moviesReducer from "./movies/moviesReducer";
import paginationReducer from "./pagination/paginationReducer";
import searchReducer from "./search/searchReducer";
import wishListReducer from "./wishlist/wishListReducer";




const rootReducer = combineReducers({
  movies: moviesReducer,
  Pagination: paginationReducer,
  search: searchReducer,
  wishList: wishListReducer,



});
export default rootReducer;
