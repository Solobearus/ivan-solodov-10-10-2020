import React from "react";
import MuiStyleFunction from "./StoresList.style";
import { makeStyles } from "@material-ui/core";
import { useGetDataByURL } from "../../hooks/useGetDataByURL";
import { parseData } from "./StoresList.logic";
import ItemRow from "../../components/ItemRow/ItemRow.jsx";


const useStyles = makeStyles(MuiStyleFunction);

const StoresList = () => {
  const classes = useStyles();
  const { dataFromSlice, isItemsURL } = useGetDataByURL();

  const storesData = parseData(dataFromSlice);
  return (
    <div className={classes.storesList}>
      <h1>Sum of Items {!isItemsURL ? "recieved" : ""} grouped By Stores</h1>
      {Object.keys(storesData).map((storeName) => (
        <ItemRow
          key={storeName}
        >{`${storeName} : ${storesData[storeName]}`}</ItemRow>
      ))}
    </div>
  );
};

export default StoresList;
