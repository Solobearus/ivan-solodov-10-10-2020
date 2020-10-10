import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./Select.style";
import {} from "./Select.logic";
import { makeStyles } from "@material-ui/core";
import {
  InputLabel,
  Select as MuiSelect,
  FormHelperText,
  FormControl,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const Select = ({ label, onChange = () => {}, children = [], value }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.Select}>
      <InputLabel shrink htmlFor={label}>
        {label}
      </InputLabel>
      <MuiSelect
        value={value}
        onChange={onChange}
        labelId={label}
        // onChange={(val) => console.log(val.target.value)}
        id={label}
      >
        {children &&
          children.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
