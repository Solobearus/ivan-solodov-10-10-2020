import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./Header.style";
import {} from "./Header.logic";
import { makeStyles } from "@material-ui/core";
import Button from "../Button/Button.jsx";
import Link from "../Link/Link.jsx";

const useStyles = makeStyles(MuiStyleFunction);

const Header = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <Button variant="contained">
        <Link to="/bought">bought</Link>
      </Button>
      <Button variant="contained">
        <Link to="/received">received</Link>
      </Button>
    </div>
  );
};

export default Header;
