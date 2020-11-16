<<<<<<< HEAD
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
=======
import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HouseDetail from './Components/HouseDetails/HouseDetail';
>>>>>>> origin/azim

import Contact from "./Components/ContactPage/Contact";
import Event from "./Components/EventPage/Event";
import Concerns from "./Components/ConcernsPage/Concerns";
import Service from "./Components/ServicePage/Service";
import About from "./Components/AboutPage/About";
import AddService from "./Components/Admin/AddService/AddService";
import Admin from "./Components/Admin/Admin";

import MyRent from "./Components/Admin/MyRent/MyRent";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
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
