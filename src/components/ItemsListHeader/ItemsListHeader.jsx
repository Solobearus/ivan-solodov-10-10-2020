import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./ItemsListHeader.style";
import {} from "./ItemsListHeader.logic";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsListHeader = ({ isShowRecievedButton }) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={`${classes.ItemsListHeader__name} ${classes.ItemsListHeader__data}`}
      >
        name
      </div>
      <div
        className={`${classes.ItemsListHeader__price} ${classes.ItemsListHeader__data}`}
      >
        price
      </div>
      <div
        className={`${classes.ItemsListHeader__date} ${classes.ItemsListHeader__data}`}
      >
        date
      </div>
      <div
        className={`${classes.ItemsListHeader__store} ${classes.ItemsListHeader__data}`}
      >
        store
      </div>
      {isShowRecievedButton && (
        <div className={classes.ItemsListHeader__spaceForButton}></div>
      )}
    </>
  );
};

export default ItemsListHeader;
