import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./ItemRow.style";
import {} from "./ItemRow.logic";
import { makeStyles } from "@material-ui/core";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { itemsSlice } from "../../store/slices";

const useStyles = makeStyles(MuiStyleFunction);

const ItemRow = ({ item, children }) => {
  const classes = useStyles();
  

  return <div className={classes.itemRow}>{children}</div>;
};

export default ItemRow;
