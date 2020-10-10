import React from 'react';
import Header from './components/Header/Header.jsx'
import BoughtPage from './pages/BoughtPage/BoughtPage.jsx'
import RecievedPage from './pages/RecievedPage/RecievedPage.jsx'
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

const useStyles = makeStyles(MuiStyleFunction);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Router>
        <Header />
        <Switch>
          <Route path="/bought">
            <BoughtPage />
          </Route>
          <Route path="/received">
            <RecievedPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
