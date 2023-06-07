import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Account from './pages/Account';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">
          </Route>
          <Route path="/register">
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
