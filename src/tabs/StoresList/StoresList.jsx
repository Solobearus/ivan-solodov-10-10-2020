import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./StoresList.style";
import {} from "./StoresList.logic";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(MuiStyleFunction);

const StoresList = ({}) => {
  const classes = useStyles();

  return <div className={classes.storesList}></div>;
};

export default StoresList;
