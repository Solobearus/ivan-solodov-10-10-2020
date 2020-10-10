import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./Input.style";
import {} from "./Input.logic";
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const Input = ({
  adornment,
  label = "",
  onChange = () => {},
  type = "text",
}) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      className={classes.input}
      onChange={onChange}
      type={type}
      InputProps={
        adornment
          ? {
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default Input;
