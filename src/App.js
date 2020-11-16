import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HouseDetail from './Components/HouseDetails/HouseDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/home">
        <Home></Home>
        </Route>
        <Route path ="/housedetails/:id">
        <HouseDetail/>
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
