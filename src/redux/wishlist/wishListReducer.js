const wishListhReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return addToWishlist(action.id, state);
    default:
      return state;
  }
};

const addToWishlist = (movie, state) => {
  if (state.includes(movie)) {
    state.splice(
      state.findIndex((item) => item.id === movie.id),
      1
    );
    return  state=[...state]
  } else {
    return state.concat([movie]);
  }
};
export default wishListhReducer;
