import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default Routes;
