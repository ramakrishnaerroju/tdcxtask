import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./../Dashboard/DashboardWrapper";
import LoginPage from "./../Login/LoginPageWrapper";

export default function HomePage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>
  );
}
