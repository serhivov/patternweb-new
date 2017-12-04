import { ADD_EDGE } from "../actions";

const edges = (state = [], action) => {
  switch (action.type) {
    case ADD_EDGE:
      return [...state, [action.source, action.target]];
    default:
      return state;
  }
};

export default edges;
