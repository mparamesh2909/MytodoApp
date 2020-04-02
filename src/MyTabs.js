import React, { Component } from "react";
import { Switch, Route, Link, HashRouter as Router } from "react-router-dom";
import "./styles.css";
import AllTasks from "./AllTasks";
import Pending from "./Pending";
import Completed from "./Completed";

export default class MyTabs extends Component {
  render() {
    return (
      <Router>
        <h1>Hey welcome home!</h1>
        <nav className="links">
          <Link to="/" className="link">
            AllTasks
          </Link>
          <Link to="/Pending" className="link">
            Pending
          </Link>
          <Link to="/Completed" className="link">
            Completed
          </Link>
        </nav>
        <div className="tabs">
          <Switch>
            <Route path="/" exact>
              <AllTasks />
            </Route>
            <Route path="/Pending">
              <Pending />
            </Route>
            <Route path="/Completed">
              <Completed />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
