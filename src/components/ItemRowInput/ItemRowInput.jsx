import React from "react";
import MuiStyleFunction from "./ItemRowInput.style";
import { makeStyles } from "@material-ui/core";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { useItemRowInput } from "./ItemRowInput.logic";
import Select from "../Select/Select.jsx";
import DatePicker from "../DatePicker/DatePicker.jsx";
import ItemRow from '../ItemRow/ItemRow.jsx'

const useStyles = makeStyles(MuiStyleFunction);

const ItemRowInput = () => {
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
    <>
      <h2>Add an item:</h2>
      <ItemRow className={classes.ItemRowInput}>
        <Input
          label={"name"}
          className={`${classes.ItemRowInput__name} ${classes.ItemRowInput__Input}`}
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></Input>
        <Input
          label={"price"}
          type="number"
          adornment="$"
          className={`${classes.ItemRowInput__price} ${classes.ItemRowInput__Input}`}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></Input>
        <DatePicker
          label={"date"}
          className={`${classes.ItemRowInput__date} ${classes.ItemRowInput__Input}`}
          onChange={(value) => setDate(value)}
          value={date}
        ></DatePicker>
        <Select
          label={"store"}
          className={`${classes.ItemRowInput__store} ${classes.ItemRowInput__Input}`}
          onChange={(e) => setStore(e.target.value)}
          value={store}
        >
          {stores}
        </Select>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </ItemRow>
    </>
  );
};

export default ItemRowInput;
