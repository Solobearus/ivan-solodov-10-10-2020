import React from "react";
import MuiStyleFunction from "./ItemRow.style";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const ItemRow = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.itemRow} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default ItemRow;
