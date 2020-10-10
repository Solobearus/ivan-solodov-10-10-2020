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
import { handleSubmit } from "./ItemRowInput.logic";
import Select from "../Select/Select.jsx";

const useStyles = makeStyles(MuiStyleFunction);

const ItemRowInput = ({}) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [store, setStore] = useState(null);

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
        className={classes.ItemRowInput__price}
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      ></Input>
      <Input
        label={"date"}
        className={classes.ItemRowInput__date}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      ></Input>
      <Select
        label={"store"}
        className={classes.ItemRowInput__store}
        onChange={(e) => setStore(e.target.value)}
        value={store}
      ></Select>
      <Button onClick={() => handleSubmit(name, price, date, store)}>
        Submit
      </Button>
      {/* <Button onClick={}>Clear</Button> */}
    </div>
  );
};

export default ItemRowInput;
