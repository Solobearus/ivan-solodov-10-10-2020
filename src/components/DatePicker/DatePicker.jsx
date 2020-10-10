import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./DatePicker.style";
import {} from "./DatePicker.logic";
import { makeStyles } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(MuiStyleFunction);

const DatePicker = (
  { onChange = () => {} },
  value,
  label,
  format = "dd/MM/yyyy",
  id,
  className
) => {
  const classes = useStyles();

  return (
    <KeyboardDatePicker
      className={className ? className : classes.DatePicker}
      margin="normal"
      id={id}
      label={label}
      format={format}
      value={value}
      onChange={onChange}
    />
  );
};

export default DatePicker;
