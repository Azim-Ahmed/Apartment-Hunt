import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route to ="/home">
        <Home></Home>
        </Route>
        <Route to ="/login">
        <Home></Home>
        </Route>
        <Route to ="/home">
        <Home></Home>
        </Route>
        <Route to ="/home">
        <Home></Home>
        </Route>
        <Route to ="/home">
        <Home></Home>
        </Route>
        <Route to ="/home">
        <Home></Home>
        </Route>
        <Route to ="/">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
