/** @format */

import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";

/**
 * user Router instead of BrowswerRouter
 * use Memory history in child app
 */

const generateClassName = createGenerateClassName({
  productionPrefix: "au"
});

const App = ({ history }) => {
  return (
    <div>
      <h1>Auth Module</h1>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
