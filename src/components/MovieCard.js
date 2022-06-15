import React from "react";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./MovieCard.css";

function MovieCard(props) {
  const navigate = useNavigate();

  const { title, poster_path, rate, id, vote_average } = props.movie;
  const goToMovie = () => {
    navigate({
      pathname: `/movie/${title}`,
      search: `?${createSearchParams({ id: id })}`,
    });
  };
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w780${poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <a className="card-text m-0" onClick={() => goToMovie()}>
          {/* <Link to={`/movie/${id}`} onClick={()=>goToPosts}>{title}</Link> */}
          {title}
        </a>
        <br/>
        <StarRatings
          rating={vote_average / 2}
          starDimension="15px"
          starSpacing="2px"
        />
      </div>
    </div>
  );
}

export default MovieCard;
