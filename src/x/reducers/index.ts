import { combineReducers } from "redux";
import nodes from "./nodes";
import edges from "./edges";

const xApp = combineReducers({
  nodes,
  edges
});

export default xApp;
