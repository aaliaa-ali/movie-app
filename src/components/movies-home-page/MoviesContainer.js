import React, { useEffect, useState } from "react";
import MovieCard from "../movies-home-page/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movies/moviesActions";
import Pagination from "../Pagination";

function MoviesContainer() {
  const pageNum = useSelector((state) => state.Pagination);
  const searchKey = useSelector((state) => state.search);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(pageNum, searchKey));
  }, [pageNum, searchKey]);
  const { isLoading, movies, totalPages, error } = useSelector(
    (state) => state.movies
  );
  console.log("error", error);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  } else if (error) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">{error}</h1>
        </div>
      </div>
    );
  } else {
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
        <Pagination />
      </div>
    );
  }
}

export default MoviesContainer;
