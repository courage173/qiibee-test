import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Brand from "./pages/Brand";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={RegisterPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/brand/:id" component={Brand} />
      </Switch>
    </>
  );
};

export default Routes;
