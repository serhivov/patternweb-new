import * as shortid from "shortid";

export const ADD_NODE = "ADD_NODE";
export const CONNECT_NODE = "CONNECT_NODE";
export const DISCONNECT_NODE = "DISCONNECT_NODE";
export const REMOVE_NODE = "REMOVE_NODE";
export const UPDATE_NODE = "UPDATE_NODE";

export const addNode = (x, y, fn = "Add") => ({
  type: ADD_NODE,
  id: shortid.generate(),
  x,
  y,
  fn
});

export const connectNode = (source, outport, target, inport) => ({
  type: CONNECT_NODE,
  source,
  outport,
  target,
  inport
});

export const disconnectNode = (target, inport) => ({
  type: DISCONNECT_NODE,
  target,
  inport
});

export const removeNode = id => ({
  type: REMOVE_NODE,
  id
});

export const updateNode = (id, x, y) => ({
  type: UPDATE_NODE,
  id,
  x,
  y
});
