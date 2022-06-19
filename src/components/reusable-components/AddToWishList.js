import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../redux/wishlist/wishListActions";
import "./AddToWishList.css";

function AddToWishList(props) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);
  const [addedToWishLIst, setAddedToWishLIst] = useState(false);
  useEffect(() => {
    let found = (element) => element.id === props.movie.id;
    if (wishList.some(found)) {
      setAddedToWishLIst(true);
    } else {
      setAddedToWishLIst(false);
    }
  }, [wishList, props.movie.id]);
  return (
    <span>
      {addedToWishLIst ? (
        <FavoriteBorderIcon
          className="svg"
          style={{ color: "red" }}
          onClick={() => dispatch(addToWishList(props.movie))}
        />
      ) : (
        <FavoriteBorderIcon
          className="svg"
          onClick={() => dispatch(addToWishList(props.movie))}
        />
      )}
    </span>
  );
}

export default AddToWishList;
