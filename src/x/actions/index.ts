import { idMaker } from "../../patterns/core/id";
import { v4 } from "uuid";

export const ADD_NODE = "ADD_NODE";
export const REMOVE_NODE = "REMOVE_NODE";
export const UPDATE_NODE = "UPDATE_NODE";

export const ADD_EDGE = "ADD_EDGE";

export const addNode = (x, y) => {
  return {
    type: ADD_NODE,
    id: v4(),
    x,
    y
  };
};

export const removeNode = id => {
  return {
    type: REMOVE_NODE,
    id
  };
};

export const updateNode = (id, x, y) => {
  return {
    type: UPDATE_NODE,
    id,
    x,
    y
  };
};

export const addEdge = (source, target) => {
  return {
    type: ADD_EDGE,
    source,
    target
  };
};
