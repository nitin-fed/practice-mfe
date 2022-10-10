/** @format */
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Mount function to start up APP
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if App in running in isolation, call mount funtion immedietly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#el_marketing");
  if (devRoot) {
    mount(devRoot);
  }
}

// if App running inside container, export mount funtion
export { mount };
