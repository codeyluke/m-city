import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./Components/AuthRoutes/PrivateRoutes";

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";

import Dashboard from "./Components/Admin/Dashboard";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
