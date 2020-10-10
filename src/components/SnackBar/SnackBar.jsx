import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./SnackBar.style";
import {} from "./SnackBar.logic";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { snackSlice } from "../../store/slices";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(MuiStyleFunction);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = ({ severity = "error" }) => {
  const { open, message } = useSelector((state) => state.snack);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackSlice.actions.closeSnack());
  };

  console.log(open);

  return (
    <Snackbar
      className={classes.SnackBar}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={9999999999}
      onClose={handleClose}
    >
      <Alert className={classes.SnackBar__Alert} onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
