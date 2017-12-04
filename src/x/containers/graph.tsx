import { connect } from "react-redux";
import Graph from "../components/Graph";
import { removeNode, addNode, addEdge } from "../actions";

const mapStateToProps = state => {
  return {
    nodes: state.nodes,
    edges: state.edges
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeNode: id => dispatch(removeNode(id)),
    addNode: (x, y) => dispatch(addNode(x, y)),
    addEdge: (source, target) => dispatch(addEdge(source, target))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
