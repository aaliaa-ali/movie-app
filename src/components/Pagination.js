import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, lastPage } from "../redux/pagination/PaginationActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Pagination() {
  const [getLast, setGetLast] = useState(false);
  const [getNext, setGetNext] = useState(true);
  const { totalPages } = useSelector((state) => state.movies);
  const pageNum = useSelector((state) => state.Pagination);
  let dispatch = useDispatch();

  useEffect(() => {
    if (pageNum != 1) {
      setGetLast(true);
    }
    if (pageNum == totalPages) {
      setGetNext(false);
    }
  });

  return (
    <div className="row ">
      <div className="col-12 d-flex ">
        {getLast ? (
          <button
            type="button"
            className="btn btn-dark"
            onClick={()=>dispatch(lastPage())}
          >
            <ArrowBackIcon></ArrowBackIcon>
            page {pageNum - 1}
          </button>
        ) : null}
        {getNext ? (
          <button
            type="button"
            className="btn btn-dark ms-auto"
            onClick={()=> dispatch(nextPage())}
          >
            page {pageNum + 1}
            <ArrowForwardIcon></ArrowForwardIcon>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Pagination;
