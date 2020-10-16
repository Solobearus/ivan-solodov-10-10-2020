import React from "react";
import MuiStyleFunction from "./ItemsList.style";
import { onClick } from "./ItemsList.logic";
import { makeStyles } from "@material-ui/core";
import ItemRow from "../../components/ItemRow/ItemRow.jsx";
import ItemRowInput from "../../components/ItemRowInput/ItemRowInput.jsx";
import { useGetDataByURL } from "../../hooks/useGetDataByURL";
import ItemsListItemRow from "../../components/ItemsListItemRow/ItemsListItemRow.jsx";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(MuiStyleFunction);

const ItemsList = () => {
  const classes = useStyles();

  const { dataFromSlice, isItemsTab } = useGetDataByURL();
  const dispatch = useDispatch();

  return (
    <div className={classes.itemsList}>
      <h1>Items List</h1>
      {dataFromSlice &&
        Object.keys(dataFromSlice).map((key) => (
          <ItemRow key={key}>
            <ItemsListItemRow
              item={dataFromSlice[key]}
              onClick={() => onClick(dispatch, dataFromSlice[key])}
              isShowRecievedButton={isItemsTab}
            />
          </ItemRow>
        ))}
      {isItemsTab && <ItemRowInput />}
    </div>
  );
};

export default ItemsList;
