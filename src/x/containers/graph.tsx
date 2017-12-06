import { connect } from "react-redux";
import Graph from "../components/Graph";
import { removeNode, addNode, connectNode, disconnectNode } from "../actions";

const mapStateToProps = state => {
  const edges = Object.keys(state.nodes).reduce((arr, nodeID) => {
    const node = state.nodes[nodeID];
    if (node.args) {
      Object.keys(node.args).forEach(inport => {
        const [source, outport] = node.args[inport].split(">");
        arr.push([source.slice(1), outport, nodeID, inport]);
      });
    }
    return arr;
  }, []);

  return {
    nodes: state.nodes,
    edges
  };
};

export default connect(mapStateToProps, {
  removeNode,
  addNode,
  connectNode,
  disconnectNode
})(Graph as any);
