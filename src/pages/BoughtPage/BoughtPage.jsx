import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./BoughtPage.style";
import {} from "./BoughtPage.logic";
import { makeStyles } from "@material-ui/core";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import ItemsList from "../../tabs/ItemsList/ItemsList";

const useStyles = makeStyles(MuiStyleFunction);

const BoughtPage = ({}) => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <div className={classes.BoughtPage}>
      <AppBar position="static">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>
      {tabIndex === 0 && <ItemsList>Items List</ItemsList>}
      {tabIndex === 1 && <div>Item Two</div>}
    </div>
  );
};

export default BoughtPage;
