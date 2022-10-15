/** @format */

import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react"; 
import { Switch, Route, BrowserRouter } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
