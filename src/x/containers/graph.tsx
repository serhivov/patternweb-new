import { connect } from "react-redux";
import Graph from "../components/Graph";
import { removeNode, addNode, connectNode, disconnectNode } from "../actions";

const mapStateToProps = state => {
  return {
    nodes: state.nodes
  };
};

export default connect(mapStateToProps, {
  removeNode,
  addNode,
  connectNode,
  disconnectNode
})(Graph as any);
