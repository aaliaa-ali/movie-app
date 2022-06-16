import React from "react";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./MovieCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  RemoveFromWishList,
} from "../redux/wishlist/wishListActions";

function MovieCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);

  const { title, poster_path, rate, id, vote_average } = props.movie;
  const goToMovie = () => {
    navigate({
      pathname: `/movie-app/movie/${title}`,
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
          {title}
        </a>
        <div>
          <StarRatings
            rating={vote_average / 2}
            starDimension="15px"
            starSpacing="2px"
          />
          {wishList.includes(props.movie) ? (
            <FavoriteIcon
              fontSize="large"
              style={{ color: "red" }}
              onClick={() => dispatch(addToWishList(props.movie))}
            />
          ) : (
            <FavoriteIcon
              fontSize="large"
              onClick={() => dispatch(addToWishList(props.movie))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
