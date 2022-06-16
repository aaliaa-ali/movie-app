import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function WishList() {
  const wishList = useSelector((state) => state.wishList);
  console.log("movieList", wishList);
  if (wishList.length < 1) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">There is no Movies In Your wish List</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {wishList.map((movie) => {
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

export default WishList;
