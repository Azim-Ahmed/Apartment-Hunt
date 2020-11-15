import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientPage from "./Components/ClientPage/ClientPage";
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
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/service">
            <Service></Service>
          </Route>

          <Route exact path="/concerns">
            <Concerns></Concerns>
          </Route>

          <Route exact path="/event">
            <Event></Event>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/profile">
            <ClientPage></ClientPage>
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/addService">
            <AddService />
          </Route>

          <Route path="/myRent">
            <MyRent />
          </Route>

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
