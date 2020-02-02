import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import AppHook from "./AppReduxHook";
import AppClassic from "./AppReduxClassic";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppClassic />
    <AppHook />
  </Provider>,
  rootElement
);
