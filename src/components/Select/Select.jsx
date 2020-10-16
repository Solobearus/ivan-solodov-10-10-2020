import React from "react";
import MuiStyleFunction from "./Select.style";
import { makeStyles } from "@material-ui/core";
import {
  InputLabel,
  Select as MuiSelect,
  FormControl,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const Select = ({
  label,
  onChange = () => {},
  children = [],
  value,
  className,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={`${classes.Select} ${className ? className : ""}`}>
      <InputLabel shrink htmlFor={label}>
        {label}
      </InputLabel>
      <MuiSelect value={value} onChange={onChange} labelId={label} id={label}>
        {children &&
          children.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
