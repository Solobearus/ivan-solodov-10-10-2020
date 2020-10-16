import React from "react";
import MuiStyleFunction from "./Header.style";
import { makeStyles } from "@material-ui/core";
import Button from "../Button/Button.jsx";
import Link from "../Link/Link.jsx";
import CurrencyIntervalInput from "../CurrencyIntervalInput/CurrencyIntervalInput.jsx";

const useStyles = makeStyles(MuiStyleFunction);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <div className={classes.Header_links}>
        <Link to="/list">
          <Button variant="contained">list</Button>
        </Link>
        <Link to="/received">
          <Button variant="contained">received</Button>
        </Link>
      </div>
      <CurrencyIntervalInput />
    </div>
  );
};

export default Header;
