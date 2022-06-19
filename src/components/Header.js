import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


function Header() {
  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography
              sx={{ mx: 2, color: "white", fontSize: 20 }}
              component="div"
            >
              Popular Movies
            </Typography>
          </Link>
          <Link to="/wish">
            <Typography
              sx={{ mx: 2, color: "white", fontSize: 20 }}
              component="div"
            >
              My Wish List
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
