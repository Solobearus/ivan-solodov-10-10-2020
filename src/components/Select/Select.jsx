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
  NativeSelect,
  FormHelperText,
  FormControl,
} from "@material-ui/core";

const useStyles = makeStyles(MuiStyleFunction);

const Select = ({ label, handleChange = () => {}, children = [], value }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.Select}>
      <InputLabel shrink htmlFor={label}>
        {label}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleChange}
        inputProps={{
          name: { label },
          id: { label },
        }}
      >
        {children &&
          children.map((option) => <option value={option}>{option}</option>)}
      </NativeSelect>
      <FormHelperText>Label + placeholder</FormHelperText>
    </FormControl>
  );
};

export default Select;
