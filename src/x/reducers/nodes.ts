import {
  ADD_NODE,
  CONNECT_NODE,
  DISCONNECT_NODE,
  REMOVE_NODE,
  UPDATE_NODE
} from "../actions";
import { omit } from "lodash";

const node = (state, action) => {
  switch (action.type) {
    case ADD_NODE:
    case UPDATE_NODE:
      return {
        x: action.x,
        y: action.y,
        fn: action.fn,
        args: action.args
      };
    case CONNECT_NODE:
      return {
        ...state,
        args: {
          ...state.args,
          [action.inport]: `$${action.source}>${action.outport || ""}`
        }
      };
    case DISCONNECT_NODE:
      const args = omit(state.args, action.inport);
      // if node.args is an empty object then omit it
      if (Object.keys(args).length === 0) {
        return omit(state, "args");
      } else {
        return { ...state, args };
      }
    default:
      return state;
  }
};

const nodes = (state = {}, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...state,
        [action.id]: node(undefined, action)
      };
    case UPDATE_NODE:
      return {
        ...state,
        [action.id]: node(state[action.id], action)
      };
    case CONNECT_NODE:
      return {
        ...state,
        [action.target]: node(state[action.target], action)
      };
    case DISCONNECT_NODE:
      return {
        ...state,
        [action.target]: node(state[action.target], action)
      };
    case REMOVE_NODE:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default nodes;
