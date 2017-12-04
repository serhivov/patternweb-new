import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import xApp from "./reducers";
import Graph from "./containers/graph";

let store = createStore(
  xApp,
  window["__REDUX_DEVTOOLS_EXTENSION__"] &&
    window["__REDUX_DEVTOOLS_EXTENSION__"]()
);

const rootEl = document.querySelector("main");

render(
  <Provider store={store}>
    <Graph />
  </Provider>,
  rootEl
);
