import React from "react";
import MuiStyleFunction from "./Header.style";
import { makeStyles } from "@material-ui/core";
import Button from "../Button/Button.jsx";
import Link from "../Link/Link.jsx";

const useStyles = makeStyles(MuiStyleFunction);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <Link to="/list">
        <Button variant="contained">list</Button>
      </Link>
      <Link to="/received">
        <Button variant="contained">received</Button>
      </Link>
    </div>
  );
};

export default Header;
