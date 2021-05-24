import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </>
  );
};

export default Routes;
