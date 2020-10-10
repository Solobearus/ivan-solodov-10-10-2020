import React from "react";
import MuiStyleFunction from "./Link.style";
import {makeStyles} from '@material-ui/core'
import {Link as MUILink} from "react-router-dom";

const useStyles = makeStyles(MuiStyleFunction);

const Link = (props) => {
  const classes = useStyles();

  return <MUILink {...props} className={classes.link}>{props.children}</MUILink>;
};

export default Link;
