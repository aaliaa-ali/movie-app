const wishListhReducer = (state =JSON.parse(localStorage.getItem('wishList'))|| [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return addToWishlist(action.id, state);
    default:
      return state;
  }
};

const addToWishlist = (movie, state) => {
  let found = (element) => element.id === movie.id;

  if (state.some(found)) {
    state.splice(
      state.findIndex((item) => item.id === movie.id),
      1
    );
    state = [...state]
    localStorage.setItem("wishList", JSON.stringify(state));
    return state;
  } else {
    state = state.concat(movie);
    localStorage.setItem("wishList", JSON.stringify(state));

    return state;
  }
};
export default wishListhReducer;
