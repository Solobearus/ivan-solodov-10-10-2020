import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./RecievedPage.style";
import {} from "./RecievedPage.logic";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ItemRow from "../../components/ItemRow/ItemRow.jsx";

const useStyles = makeStyles(MuiStyleFunction);

const RecievedPage = ({}) => {

  const classes = useStyles();
  const { recievedItems } = useSelector((state) => state.items);

  return (
    <div className={classes.RecievedPage}>
      {recievedItems &&
        Object.keys(recievedItems).map((key) => (
          <ItemRow key={key} item={recievedItems[key]} recieved={true}></ItemRow>
        ))}
    </div>
  );
};

export default RecievedPage;
