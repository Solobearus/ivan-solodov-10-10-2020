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
import DateFnsAdapter from "@date-io/date-fns";

const useStyles = makeStyles(MuiStyleFunction);

const ItemRow = ({ item }) => {
  const classes = useStyles();

  console.log(`item`, item);
  const dateFns = new DateFnsAdapter();

  // const getDateString = (date) => {
  //   return `${date.getDate()}/${date.getMonth()}/${date.getYear()}`;
  // };

  return (
    <div className={classes.itemRow}>
      <div className={classes.itemCard__name}>{item.name}</div>
      <div className={classes.itemCard__price}>{item.price}</div>
      <div className={classes.itemCard__date}>{item.date}</div>
      <div className={classes.itemCard__store}>{item.store}</div>
    </div>
  );
};

export default ItemRow;
