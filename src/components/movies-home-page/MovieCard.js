import {  useNavigate, createSearchParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./MovieCard.css";
import { useDispatch,  } from "react-redux";

import AddToWishList from "../reusable-components/AddToWishList";

function MovieCard(props) {
  const navigate = useNavigate();
  const { title, poster_path, rate, id, vote_average } = props.movie;

  const goToMovie = () => {
    navigate({
      pathname: `/movie-app/movie/${title}`,
      search: `?${createSearchParams({ id: id })}`,
    });
  };

  return (
    <div className="card my-2">
      <img
        src={`https://image.tmdb.org/t/p/w780${poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <a className="card-text m-0" onClick={() => goToMovie()}>
          {title}
        </a>
        <AddToWishList movie={props.movie}/>

        <div>
          <StarRatings
            rating={vote_average / 2}
            starDimension="15px"
            starSpacing="2px"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

