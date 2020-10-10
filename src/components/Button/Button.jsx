import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./Button.style";
import {} from "./Button.logic";
import { makeStyles } from "@material-ui/core";
import MUIButton from "@material-ui/core/Button";

const useStyles = makeStyles(MuiStyleFunction);

const Button = ({
  variant,
  className,
  children,
  onClick = () => {},
  disabled = false,
}) => {
  const classes = useStyles();

  return (
    <MUIButton
      className={`${classes.button} ${className}`}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
