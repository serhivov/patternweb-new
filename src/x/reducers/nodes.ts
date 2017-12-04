import { ADD_NODE, REMOVE_NODE } from "../actions";
import { omit } from "lodash";

const nodes = (state = {}, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...state,
        [action.id]: {
          x: action.x,
          y: action.y
        }
      };
    case REMOVE_NODE:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default nodes;
