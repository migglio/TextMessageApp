import React from "react";
import ReactDOM from "react-dom";
import ShowMessage from "./components/ShowMessage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

const rootEl = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ShowMessage />
  </Provider>,
  rootEl
);
