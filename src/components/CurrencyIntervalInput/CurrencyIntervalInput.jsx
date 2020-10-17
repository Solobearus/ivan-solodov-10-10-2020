import React, { useState, useEffect } from "react";
import MuiStyleFunction from "./CurrencyIntervalInput.style";
import { makeStyles } from "@material-ui/core";
import Input from "../Input/Input.jsx";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button.jsx";
import { currencySlice } from "../../store/slices";

const useStyles = makeStyles(MuiStyleFunction);

const CurrencyIntervalInput = () => {
  const { intervalForCurrencyUpdate } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [interval, setInterval] = useState(intervalForCurrencyUpdate);

  useEffect(() => {
    if (interval !== intervalForCurrencyUpdate)
      setInterval(intervalForCurrencyUpdate);
  }, [interval, intervalForCurrencyUpdate]);

  const handleSubmit = () => {
    if (interval > 1000)
      dispatch(currencySlice.actions.setIntervalForCurrencyUpdate(interval));
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
