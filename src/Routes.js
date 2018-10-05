import React, { Component } from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
