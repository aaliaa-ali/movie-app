import React, { useEffect, useState } from "react";
import MovieCard from "../movies-home-page/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movies/moviesActions";
import Pagination from "../Pagination";
import CallApi from "../../reusableFunctions/callApi";

function MoviesContainer() {
  const pageNum = useSelector((state) => state.Pagination);
  const searchKey = useSelector((state) => state.search);
  // let dispatch = useDispatch();
  console.log("pageNum", pageNum);

  if (searchKey) {
    var url = "https://api.themoviedb.org/3/search/movie";
  } else {
    var url = "https://api.themoviedb.org/3/movie/popular";
  }
  const { data, isError, error, isLoading } = CallApi(
    ["fetchMovies", pageNum, searchKey],
    {
      url: url,
      params: {
        api_key: "eddd038321981ee2c55617fffd2ddd09",
        page: pageNum,
        query: searchKey,
      },
    },
    {
      cacheTime: 0,
      retry: 2,
      refetchOnMount: false,
    }
  );
  console.log("reactQuery", data?.data);
  // useEffect(() => {
  //   dispatch(fetchMovies(pageNum, searchKey));
  // }, [pageNum, searchKey]);

  // const { isLoading, movies, totalPages, error } = useSelector(
  //   (state) => state.movies
  // );

  if (isLoading) {
    return <h1>Loading.....</h1>;
  } else if (isError) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">{error}</h1>
        </div>
      </div>
    );
  } else if (data?.data?.results.length == 0) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">Try another Search key word </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {data?.data?.results?.map((movie) => {
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
