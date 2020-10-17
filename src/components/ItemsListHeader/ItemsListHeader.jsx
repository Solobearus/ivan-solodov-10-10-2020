import React from "react";
import MuiStyleFunction from "./ItemsListHeader.style";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsListHeader = ({ isShowRecievedButton }) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.ItemsListHeader__data}
      >
        name
      </div>
      <div
        className={classes.ItemsListHeader__data}
      >
        price
      </div>
      <div
        className={classes.ItemsListHeader__data}
      >
        date
      </div>
      <div
        className={classes.ItemsListHeader__data}
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
