import { connect } from "react-redux";
import Graph from "../components/Graph";
import { removeNode, addNode, addEdge } from "../actions";

const mapStateToProps = state => {
  return {
    nodes: state.nodes,
    edges: state.edges
  };
};

export default connect(mapStateToProps, {
  removeNode,
  addNode,
  addEdge
})(Graph as any);
