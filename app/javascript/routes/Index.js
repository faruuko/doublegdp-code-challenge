import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListTask from "../components/ListTask";
import AddTask from "../components/AddTask";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={ListTask} />
      <Route path="/add" exact component={AddTask} />
    </Switch>
  </Router>
);
