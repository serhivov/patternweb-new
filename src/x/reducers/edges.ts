import { ADD_EDGE } from "../actions";

const edge = (state, action) => {
  switch (action.type) {
    case ADD_EDGE:
      return [action.source, action.target];
    default:
      return state;
  }
};

const edges = (state = [], action) => {
  switch (action.type) {
    case ADD_EDGE:
      return [...state, edge(undefined, action)];
    default:
      return state;
  }
};

export default edges;
