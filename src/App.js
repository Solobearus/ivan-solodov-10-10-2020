import React, { useEffect, useState, useRef } from 'react';
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

import { useDispatch, useSelector } from "react-redux";
import { itemsSlice } from './store/slices'
import Page from './pages/Page/Page.jsx'
import useUpdateCurrency from './hooks/useUpdateCurrency'

const useStyles = makeStyles(MuiStyleFunction);


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useUpdateCurrency(dispatch);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state"))
    if (state)
      dispatch(itemsSlice.actions.initState({ state }))
  }, [])


  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Redirect
              to={{
                pathname: "/list"
              }}
            />
          </Route>
          <Route path={"/list"}>
            <Page />
          </Route>
          <Route path={"/received"}>
            <Page />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
