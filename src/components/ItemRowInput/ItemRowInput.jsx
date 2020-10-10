import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./ItemRowInput.style";
import {} from "./ItemRowInput.logic";
import { makeStyles } from "@material-ui/core";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { useItemRowInput } from "./ItemRowInput.logic";
import { handleSubmit, clear } from "./ItemRowInput.logic";
import Select from "../Select/Select.jsx";
import DatePicker from "../DatePicker/DatePicker.jsx";
const useStyles = makeStyles(MuiStyleFunction);

const ItemRowInput = ({}) => {
  const classes = useStyles();

  const {
    name,
    setName,
    price,
    setPrice,
    date,
    setDate,
    store,
    stores,
    setStore,
    handleSubmit,
  } = useItemRowInput();

  return (
    <div className={classes.ItemRowInput}>
      <Input
        label={"name"}
        className={classes.ItemRowInput__name}
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></Input>
      <Input
        label={"price"}
        type="number"
        adornment="$"
        className={classes.ItemRowInput__price}
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      ></Input>
      <DatePicker
        label={"date"}
        className={classes.ItemRowInput__date}
        onChange={(value) => setDate(value)}
        value={date}
      ></DatePicker>
      <Select
        label={"store"}
        className={classes.ItemRowInput__store}
        onChange={(e) => setStore(e.target.value)}
        value={store}
      >
        {stores}
      </Select>
      <Button onClick={handleSubmit}>Submit</Button>
      {/* <Button onClick={}>Clear</Button> */}
    </div>
  );
};

export default ItemRowInput;
