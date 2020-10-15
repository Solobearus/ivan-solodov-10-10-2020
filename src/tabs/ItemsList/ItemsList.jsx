import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./ItemsList.style";
import {} from "./ItemsList.logic";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ItemRow from "../../components/ItemRow/ItemRow.jsx";
import ItemRowInput from "../../components/ItemRowInput/ItemRowInput.jsx";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsList = ({}) => {
  const classes = useStyles();

  let history = useHistory();

  const sliceToTakeDataFromBasedOnURL =
    history.location.pathname === "/list" ? "items" : "recievedItems";

  const { [sliceToTakeDataFromBasedOnURL]: dataFromSlice } = useSelector(
    (state) => state.items
  );

  console.log(`dataFromSlice`,dataFromSlice)

  return (
    <div className={classes.itemsList}>
      {dataFromSlice &&
        Object.keys(dataFromSlice).map((key) => (
          <ItemRow key={key} item={dataFromSlice[key]}></ItemRow>
        ))}
      <ItemRowInput></ItemRowInput>
    </div>
  );
};

export default ItemsList;
