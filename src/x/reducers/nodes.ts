import { ADD_NODE, REMOVE_NODE, UPDATE_NODE, CONNECT_NODE } from "../actions";
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
    case REMOVE_NODE:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default nodes;
