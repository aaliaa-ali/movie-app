import axios from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
// import { setBooks, fetchBooksFail } from "./booksActions";
import { fetchMovies, setMovies, fetchMoviesFalier } from "./moviesActions";

export function* getMovies() {
  try {
    const { data } = yield call(fetchBooksApi);
    console.log('data', data)
    yield put(setMovies(data));
    if (!data.items) throw new Error("Please Try Another Keyword");
  } catch (e) {
    yield put(fetchMoviesFalier(e));
  }
}
export function* mySaga() {
  yield takeLatest("FETCH_MOVIES", getMovies);
}

function fetchBooksApi() {
  return axios.request({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=eddd038321981ee2c55617fffd2ddd09`,
  });
}
