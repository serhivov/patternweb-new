import * as React from "react";
import Graph from "./containers/graph";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware, compose } from "redux";
import { render } from "react-dom";
import { rootEpic } from "./epics";

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(createEpicMiddleware(rootEpic)))
);

// store.subscribe(() => {
//   console.info(store.getState().nodes)
// })

render(
  <Provider store={store}>
    <Graph />
  </Provider>,
  document.querySelector("main")
);
