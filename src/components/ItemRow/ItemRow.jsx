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

const ItemRow = ({ item, isShowRecievedButton }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
  };

  const onClick = () => {
    dispatch(itemsSlice.actions.recieveItem({ id: item.id }));
  };

  return (
    <div className={classes.itemRow}>
      <div className={classes.itemCard__name}>{item.name}</div>
      <div className={classes.itemCard__price}>{item.price}</div>
      <div className={classes.itemCard__date}>{getDate(item.date)}</div>
      <div className={classes.itemCard__store}>{item.store}</div>
      {isShowRecievedButton && (
        <Button onClick={onClick} className={classes.itemRow__button}>
          Recieved
        </Button>
      )}
    </div>
  );
};

export default ItemRow;
