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

const useStyles = makeStyles(MuiStyleFunction);

const BoughtPage = ({}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.BoughtPage}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>
      {value === 0 && <div>Item One</div>}
      {value === 1 && <div>Item Two</div>}
    </div>
  );
};

export default BoughtPage;
