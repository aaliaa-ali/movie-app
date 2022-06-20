import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies, setMovies, fetchMoviesFalier } from "./moviesActions";

export function* getMovies(action) {

  try {
    const { data } = yield call(fetchBooksApi, action);
    if(data.results.length>0){
      yield put(setMovies({movies:data.results ,totalPages:data.total_pages}));
    }
    else throw new Error('Try Another Search Key Word');
  } catch (e) {
    yield put(fetchMoviesFalier(e.message));
  }
}
export function* mySaga() {
  yield takeLatest("FETCH_MOVIES", getMovies);
}

function fetchBooksApi(action) {
  if (!action.searchKey) {
    return axios.request({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=eddd038321981ee2c55617fffd2ddd09&page=${action.pageNum}`,
    });
  }else{
    return axios.request({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=eddd038321981ee2c55617fffd2ddd09&page=${action.pageNum}&query=${action.searchKey}`,
      });
  }
}

