import React from "react";
import MuiStyleFunction from "./ItemsList.style";
import { onClick } from "./ItemsList.logic";
import { makeStyles } from "@material-ui/core";
import ItemRow from "../../components/ItemRow/ItemRow.jsx";
import ItemRowInput from "../../components/ItemRowInput/ItemRowInput.jsx";
import { useGetDataByURL } from "../../hooks/useGetDataByURL";
import ItemsListItemRow from "../../components/ItemsListItemRow/ItemsListItemRow.jsx";
import { useDispatch } from "react-redux";
import ItemsListHeader from "../../components/ItemsListHeader/ItemsListHeader.jsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(MuiStyleFunction);

const ItemsList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const { dataFromSlice, isItemsURL } = useGetDataByURL();

  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.itemsList}>
      <h1>{!isItemsURL ? "Recieved " : ""}Items List</h1>
      {!matches ? (
        <ItemRow>
          <ItemsListHeader isShowRecievedButton={isItemsURL} />
        </ItemRow>
      ) : null}
      {dataFromSlice &&
        Object.keys(dataFromSlice).sort((a, b) => dataFromSlice[a].date - dataFromSlice[b].date).map((key) => (
          <ItemRow key={key}>
            <ItemsListItemRow
              item={dataFromSlice[key]}
              onClick={() => onClick(dispatch, dataFromSlice[key])}
              isShowRecievedButton={isItemsURL}
            />
          </ItemRow>
        ))}
      {isItemsURL && <ItemRowInput />}
    </div>
  );
};

export default ItemsList;
