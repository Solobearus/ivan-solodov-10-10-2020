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

const useStyles = makeStyles(MuiStyleFunction);

const SnackBar = ({}) => {
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
    <div className={classes.SnackBar}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default SnackBar;
