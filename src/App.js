import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import ListPage from './pages/ListPage/ListPage.jsx'
import RecievedPage from './pages/RecievedPage/RecievedPage.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      test
      <Router>
        <Header />
        <Switch>
          <Route path="/list">
            <ListPage />
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
