const paginationReducer = (state = 1, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return state + 1;
    case "LAST_PAGE":
      return state - 1;
    case "RESET_PAGE_NUM":
      return state=1;
    default:
      return state;
  }
};
export default paginationReducer;
