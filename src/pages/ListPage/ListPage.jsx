import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./ListPage.style";
import {} from "./ListPage.logic";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(MuiStyleFunction);

const ListPage = ({}) => {
  const classes = useStyles();

  return <div className={classes.}></div>;
};

export default ListPage;
