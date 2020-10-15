import React, { useEffect } from 'react';
import Header from './components/Header/Header.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";
import MuiStyleFunction from './App.style'
import { makeStyles } from '@material-ui/core'
import SnackBar from './components/SnackBar/SnackBar.jsx'
import { useDispatch, useSelector } from "react-redux";
import { itemsSlice } from './store/slices'
import Page from './pages/Page/Page.jsx'

const useStyles = makeStyles(MuiStyleFunction);


function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state"))
    if (state)
      dispatch(itemsSlice.actions.initState({ state }))
  }, [])

  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Header />
          <SnackBar></SnackBar>
          <Page></Page>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
