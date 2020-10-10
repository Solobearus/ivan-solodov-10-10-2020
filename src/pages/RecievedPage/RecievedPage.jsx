import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./RecievedPage.style";
import {} from "./RecievedPage.logic";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(MuiStyleFunction);

const RecievedPage = ({}) => {
  const classes = useStyles();

  return <div className={classes.}></div>;
};

export default RecievedPage;
