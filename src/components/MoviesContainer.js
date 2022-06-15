import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movies/moviesActions";

function MoviesContainer() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const { isLoading, movies } = useSelector((state) => state.movies);
  console.log(movies, isLoading);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  } else if (!isLoading) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {movies.map((movie) => {
            return (
              <div className="col-md-3 col-sm-6 col-8 " key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoviesContainer;
