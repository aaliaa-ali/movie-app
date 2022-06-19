import React from "react";
import MoviesContainer from "./movies-home-page/MoviesContainer";
import Search from "./Search";

function MainPage() {
  return (
    <div>
      <Search />
      <MoviesContainer />
    </div>
  );
}

export default MainPage;
