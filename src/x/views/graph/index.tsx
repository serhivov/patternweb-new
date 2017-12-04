import * as React from "react";
import Node from "./components/node";
import Edge from "./components/edge";

import { connect } from "react-redux";
import { addNode } from "../../actions";

interface IState {
  edges: Map<string, string>;
  nodes: object;
}

class Graph extends React.Component<{}, IState> {
  state: IState = {
    edges: new Map(),
    nodes: {}
  };

  handleDoubleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const { clientX: x, clientY: y } = event;
    // dispatch(addNode(x, y))
  };

  removeNode = (nodeID: string) => (
    event: React.MouseEvent<SVGTextElement>
  ) => {
    event.preventDefault();
    this.setState((prevState: IState) => {
      delete prevState.nodes[nodeID];
      prevState.edges = new Map(
        [...prevState.edges].filter(
          edge => edge[0] !== nodeID || edge[1] !== nodeID
        )
      );
      return prevState;
    });
  };

  render() {
    const { nodes, edges } = this.state;
    return (
      <svg onDoubleClick={this.handleDoubleClick}>
        {Object.entries(nodes).map(([id, n]) => (
          <Node key={id} id={id} removeNode={this.removeNode} {...n} />
        ))}
        {[...edges].map(([source, target]) => (
          <Edge
            key={[source, target].join("-")}
            source={nodes[source]}
            target={nodes[target]}
          />
        ))}
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return {
    nodes: state.nodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
