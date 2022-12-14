/** @format */

import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";

/**
 * user Router instead of BrowswerRouter
 * use Memory history in child app
 */

const generateClassName = createGenerateClassName({
  productionPrefix: "ma"
});

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
