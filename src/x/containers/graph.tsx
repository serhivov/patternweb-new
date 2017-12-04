import { connect } from "react-redux";
import Graph from "../components/Graph";
import { removeNode, addNode, addEdge, removeEdge } from "../actions";

const mapStateToProps = state => {
  return {
    nodes: state.nodes,
    edges: state.edges
  };
};

export default connect(mapStateToProps, {
  removeNode,
  addNode,
  addEdge,
  removeEdge
})(Graph as any);
