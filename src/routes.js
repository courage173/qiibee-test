import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Brand from "./pages/Brand";
import AuthRoute from "./HOC/AuthRoute";
import ProfilePage from "./components/Profile";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={RegisterPage} />
        <Route exact path="/dashboard" component={AuthRoute(Dashboard)} />
        <Route exact path="/dashboard/brand/:id" component={AuthRoute(Brand)} />
        <Route
          exact
          path="/dashboard/profile"
          component={AuthRoute(ProfilePage)}
        />
      </Switch>
    </>
  );
};

export default Routes;
