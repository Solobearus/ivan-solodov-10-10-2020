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
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(MuiStyleFunction);

const Header = ({}) => {
  const classes = useStyles();

  return <div className={classes.Header}>Im Header</div>;
};

export default Header;
