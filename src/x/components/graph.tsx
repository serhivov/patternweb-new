import * as React from "react";
import Node from "./node";
import Edge from "./edge";

interface IProps {
  nodes: any;
  edges: any;
  removeNode: any;
  addNode: any;
  addEdge: any;
  removeEdge: any;
}

const inports = {
  augend: "number",
  addend: "number"
};

class Graph extends React.Component<IProps, {}> {
  state = {
    sourceNode: undefined
  };

  handlePortClick = (id: string, isInport: boolean) => (
    event: React.MouseEvent<SVGTextElement>
  ) => {
    event.preventDefault();
    console.log({ id });
    if (this.state.sourceNode) {
      if (isInport && this.state.sourceNode !== id) {
        this.props.addEdge(this.state.sourceNode, id);
        this.setState({ sourceNode: undefined });
      }
    } else {
      if (!isInport) this.setState({ sourceNode: id });
    }
  };

  handleDoubleClick = addNode => (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    console.log(event);
    const { clientX: x, clientY: y } = event;
    addNode(x, y);
  };

  handleNodeRightClick = (removeNode, id: string) => (
    event: React.MouseEvent<SVGTextElement>
  ) => {
    event.preventDefault();
    removeNode(id);
  };

  handleEdgeRightClick = (removeEdge, source: string, target: string) => (
    event: React.MouseEvent<SVGLineElement>
  ) => {
    event.preventDefault();
    removeEdge(source, target);
  };

  handleNodeMouseOver = (event: React.MouseEvent<SVGTextElement>) => {
    console.log(event);
  };

  handleNodeClick = id => (event: React.MouseEvent<SVGTextElement>) => {
    alert(id);
  };

  render() {
    const { nodes, edges, removeNode, addNode, removeEdge } = this.props;
    return (
      <svg onDoubleClick={this.handleDoubleClick(addNode)}>
        {Object.entries(nodes).map(([id, n]) => (
          <Node
            key={id}
            id={id}
            inports={inports}
            handleNodeClick={this.handleNodeClick(id)}
            handlePortClick={this.handlePortClick}
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
            handleRightClick={this.handleEdgeRightClick(
              removeEdge,
              source,
              target
            )}
          />
        ))}
      </svg>
    );
  }
}

export default Graph;
