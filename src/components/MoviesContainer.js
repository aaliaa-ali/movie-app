import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movies/moviesActions";

function MoviesContainer() {
  let dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchMovies()) ;
  }, []);
  const state = useSelector((state) => state.movies);
  console.log(state);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default MoviesContainer;
