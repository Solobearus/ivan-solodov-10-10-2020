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
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsListItemRow = ({ item, onClick, isShowRecievedButton }) => {
  const classes = useStyles();

  const { USDtoILS } = useSelector((state) => state.currency);

  return (
    <>
      <div className={classes.ItemsListRowItem__name}>{item.name}</div>
      <div className={classes.ItemsListRowItem__price}>
        <div>{`שח`}</div>
        <div>{`${(item.price * USDtoILS).toFixed(2)}`}</div>
      </div>
      <div className={classes.ItemsListRowItem__date}>{getDate(item.date)}</div>
      <div className={classes.ItemsListRowItem__store}>{item.store}</div>
      {isShowRecievedButton && (
        <Button onClick={onClick} className={classes.itemRow__button}>
          Recieved
        </Button>
      )}
    </>
  );
};

export default ItemsListItemRow;
