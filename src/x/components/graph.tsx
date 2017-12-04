import * as React from "react";
import Node from "./node";
import Edge from "./edge";

interface IProps {
  nodes: any;
  edges: any;
  removeNode: any;
  addNode: any;
}

class Graph extends React.Component<IProps, {}> {
  state = {
    sourceNode: undefined
  };

  handleClick = (id: string) => (event: React.MouseEvent<SVGTextElement>) => {
    event.preventDefault();
    if (this.state.sourceNode) {
      if (this.state.sourceNode !== id) {
        this.props.addEdge(this.state.sourceNode, id);
        this.setState({ sourceNode: undefined });
      }
    } else {
      this.setState({ sourceNode: id });
    }
  };

  handleDoubleClick = addNode => (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;
    addNode(x, y);
  };

  handleNodeRightClick = (removeNode, id: string) => (
    event: React.MouseEvent<SVGTextElement>
  ) => {
    event.preventDefault();
    removeNode(id);
  };

  handleNodeMouseOver = (event: React.MouseEvent<SVGTextElement>) => {
    console.log(event);
  };

  render() {
    const { nodes, edges, removeNode, addNode } = this.props;
    return (
      <svg onDoubleClick={this.handleDoubleClick(addNode)}>
        {Object.entries(nodes).map(([id, n]) => (
          <Node
            key={id}
            id={id}
            handleClick={this.handleClick(id)}
            handleRightClick={this.handleNodeRightClick(removeNode, id)}
            handleMouseOver={this.handleNodeMouseOver}
            {...n}
          />
        ))}
        {edges.map(([source, target]) => (
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

export default Graph;
