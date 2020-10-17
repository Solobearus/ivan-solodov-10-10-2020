import React from "react";
import MuiStyleFunction from "./ItemsListItemRow.style";
import { makeStyles } from "@material-ui/core";
import { getDate } from "../../utils";
import Button from "../Button/Button.jsx";
import { useSelector } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsListItemRow = ({ item, onClick, isShowRecievedButton }) => {
  const classes = useStyles();
  const theme = useTheme();
  const xsMediaQuery = useMediaQuery(theme.breakpoints.down("xs"));

  const { USDtoILS } = useSelector((state) => state.currency);

  return (
    <>
      <div className={classes.ItemsListRowItem__data}>
        {xsMediaQuery ? (
          <div className={classes.ItemsListRowItem__data__label}>name</div>
        ) : null}
        <div className={classes.ItemsListRowItem__data__value}>{item.name}</div>
      </div>

      <div className={classes.ItemsListRowItem__data}>
        {xsMediaQuery ? (
          <div className={classes.ItemsListRowItem__data__label}>price</div>
        ) : null}
        <div
          className={`${classes.ItemsListRowItem__price} ${classes.ItemsListRowItem__data__value}`}
        >
          {USDtoILS ? (
            <>
              <div>{`שח`}</div>
              <div>{`${(item.price * USDtoILS).toFixed(2)}`}</div>
            </>
          ) : (
            "loading ... "
          )}
        </div>
      </div>

      <div className={classes.ItemsListRowItem__data}>
        {xsMediaQuery ? (
          <div className={classes.ItemsListRowItem__data__label}>date</div>
        ) : null}
        <div className={classes.ItemsListRowItem__data__value}>
          {getDate(item.date)}
        </div>
      </div>

      <div className={classes.ItemsListRowItem__data}>
        {xsMediaQuery ? (
          <div className={classes.ItemsListRowItem__data__label}>store</div>
        ) : null}
        <div className={classes.ItemsListRowItem__data__value}>
          {item.store}
        </div>
      </div>
      {isShowRecievedButton && <Button onClick={onClick}>Recieved</Button>}
    </>
  );
};

export default ItemsListItemRow;
