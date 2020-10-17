import React from "react";
import MuiStyleFunction from "./SnackBar.style";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { snackSlice } from "../../store/slices";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(MuiStyleFunction);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = () => {
  const { open, message, severity = 'error' } = useSelector((state) => state.snack);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackSlice.actions.closeSnack());
  };

  return (
    <Snackbar
      className={classes.SnackBar}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        className={classes.SnackBar__Alert}
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
