const wishListhReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return addToWishlist(action.id, state);
    default:
      return state;
  }
};

const addToWishlist = (id, state) => {
  if (state.includes(id)) {
    state.splice(
      state.findIndex((movieId) => movieId === id),
      1
    );
    return  state=[...state]
  } else {
    return state.concat([id]);
  }
};
export default wishListhReducer;
