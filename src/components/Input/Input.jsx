import React from "react";
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
  className
}) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      className={`${classes.input} ${className ? className : ''}`}
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
