import React from "react";
import MuiStyleFunction from "./Button.style";
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
      className={`${classes.button} ${className ? className : ""}`}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      color="primary"
    >
      <div>{children}</div>
    </MUIButton>
  );
};

export default Button;
