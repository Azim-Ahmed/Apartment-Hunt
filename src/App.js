import React from "react";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home></Home>
        </Route>

        <Route to="*">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
