import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Stack } from "@mui/material";
import { fetchWithSearchKey } from "../redux/search/searchActions";
import { resetPageNum } from "../redux/pagination/PaginationActions";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  let dispatch = useDispatch();
  const searchParam = useRef();
  const search = () => {
    let searchKey = searchParam.current.value;
    dispatch(fetchWithSearchKey(searchKey));

    dispatch(resetPageNum());
  };
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          p: "2px 4px",
          m: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            justifyContent: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search For Your Favourite Movies"
            inputRef={searchParam}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton onClick={search} sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
    </div>
  );
}

export default Search;
