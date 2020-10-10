import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import ListPage from './pages/ListPage/ListPage.jsx'
import RecievedPage from './pages/RecievedPage/RecievedPage.jsx'




function App() {
  return (
    <div className="App">
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
