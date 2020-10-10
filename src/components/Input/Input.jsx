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
  value,
}) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      className={classes.input}
      onChange={onChange}
      type={type}
      value={value}
      InputProps={
        adornment
          ? {
              startAdornment: (
                <InputAdornment position="start">{adornment}</InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default Input;
