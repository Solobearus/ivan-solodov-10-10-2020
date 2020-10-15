import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MuiStyleFunction from "./Page.style";
import {} from "./Page.logic";
import { makeStyles } from "@material-ui/core";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import ItemsList from "../../tabs/ItemsList/ItemsList";
import StoresList from "../../tabs/StoresList/StoresList.jsx";
import Header from '../../components/Header/Header.jsx'
import SnackBar from '../../components/SnackBar/SnackBar.jsx'

const useStyles = makeStyles(MuiStyleFunction);

const Page = ({}) => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <div className={classes.BoughtPage}>
      <Header />
      <SnackBar />
      <AppBar position="static">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Items List" />
          <Tab label="Stores List" />
        </Tabs>
      </AppBar>
      {tabIndex === 0 && <ItemsList></ItemsList>}
      {tabIndex === 1 && <StoresList></StoresList>}
    </div>
  );
};

export default Page;
