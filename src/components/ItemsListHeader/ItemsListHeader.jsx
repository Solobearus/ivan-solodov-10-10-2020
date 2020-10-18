import React from "react";
import MuiStyleFunction from "./ItemsListHeader.style";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsListHeader = ({ isShowRecievedButton }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ItemsListHeader__data}>Name</div>
      <div className={classes.ItemsListHeader__data}>Price</div>
      <div className={classes.ItemsListHeader__data}>Delivary Est. Date</div>
      <div className={classes.ItemsListHeader__data}>Store</div>
      {isShowRecievedButton && (
        <div className={classes.ItemsListHeader__spaceForButton}></div>
      )}
    </>
  );
};

export default ItemsListHeader;
