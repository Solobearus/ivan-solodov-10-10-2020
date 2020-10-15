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
import ItemRow from "../../components/ItemRow/ItemRow.jsx";
import ItemRowInput from "../../components/ItemRowInput/ItemRowInput.jsx";
import { useGetTheRightData } from "./ItemsList.logic";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsList = ({}) => {
  const classes = useStyles();

  const { dataFromSlice, isItemsTab } = useGetTheRightData();

  return (
    <div className={classes.itemsList}>
      {dataFromSlice &&
        Object.keys(dataFromSlice).map((key) => (
          <ItemRow
            key={key}
            item={dataFromSlice[key]}
            isShowRecievedButton={isItemsTab}
          ></ItemRow>
        ))}
      {isItemsTab && <ItemRowInput />}
    </div>
  );
};

export default ItemsList;
