import React, { useState, useEffect } from "react";
import MuiStyleFunction from "./CurrencyIntervalInput.style";
import { makeStyles } from "@material-ui/core";
import Input from "../Input/Input.jsx";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button.jsx";
import { currencySlice, snackSlice } from "../../store/slices";

const useStyles = makeStyles(MuiStyleFunction);

const CurrencyIntervalInput = () => {
  const { intervalForCurrencyUpdate } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [interval, setInterval] = useState(intervalForCurrencyUpdate);

  useEffect(() => {
    setInterval(intervalForCurrencyUpdate);
  }, [intervalForCurrencyUpdate]);

  const handleSubmit = () => {
    if (interval >= 500) {
      dispatch(currencySlice.actions.setIntervalForCurrencyUpdate(interval));
      dispatch(
        snackSlice.actions.openSnack({
          message: `succesfully updated the interval to ${interval}`,
          severity: `success`,
        })
      );
    } else {
      dispatch(
        snackSlice.actions.openSnack({
          message: "iterval for currency fetch cannot be lower than 500ms",
        })
      );
    }
  };

  return (
    <div className={classes.CurrencyIntervalInput}>
      Interval for currency update (miliseconds):
      <Input
        type="number"
        value={interval}
        onChange={(e) => setInterval(e.target.value)}
      ></Input>
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default CurrencyIntervalInput;
