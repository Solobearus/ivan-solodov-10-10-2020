import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./StoresList.style";
import {} from "./StoresList.logic";
import { makeStyles } from "@material-ui/core";
import { useGetDataByURL } from "../../hooks/useGetDataByURL";
import { parseData } from "./StoresList.logic";
import ItemRow from "../../components/ItemRow/ItemRow.jsx";
const useStyles = makeStyles(MuiStyleFunction);

const StoresList = ({}) => {
  const classes = useStyles();

  const { dataFromSlice, isItemsTab } = useGetDataByURL();

  console.log(`dataFromSlice`, dataFromSlice);

  const storesData = parseData(dataFromSlice);
  return (
    <div className={classes.storesList}>
      {Object.keys(storesData).map((storeName) => (
        <ItemRow>{`${storeName} : ${storesData[storeName]}`}</ItemRow>
      ))}
    </div>
  );
};

export default StoresList;
