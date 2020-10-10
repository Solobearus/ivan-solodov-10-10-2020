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

const useStyles = makeStyles(MuiStyleFunction);

const ItemsList = ({}) => {
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);

  return (
    <div className={classes.itemsList}>
      {items &&
        Object.keys(items).map((key) => (
          <ItemRow key={key} item={items[key]}></ItemRow>
        ))}
      <ItemRowInput></ItemRowInput>
    </div>
  );
};

export default ItemsList;
