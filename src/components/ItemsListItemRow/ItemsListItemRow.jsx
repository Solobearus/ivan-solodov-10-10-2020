import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./ItemsListItemRow.style";
import {} from "./ItemsListItemRow.logic";
import { makeStyles } from "@material-ui/core";
import { getDate } from "../../utils";
import Button from '../Button/Button.jsx'

const useStyles = makeStyles(MuiStyleFunction);

const ItemsListItemRow = ({ item, onClick, isShowRecievedButton }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.itemCard__name}>{item.name}</div>
      <div className={classes.itemCard__price}>{item.price}</div>
      <div className={classes.itemCard__date}>{getDate(item.date)}</div>
      <div className={classes.itemCard__store}>{item.store}</div>
      {isShowRecievedButton && (
        <Button onClick={onClick} className={classes.itemRow__button}>
          Recieved
        </Button>
      )}
    </>
  );
};

export default ItemsListItemRow;
