import * as React from "react";
import Edge from "./edge";
import Node from "./node";
import components from "../functions";

interface IProps {
  addEdge: any;
  addNode: any;
  connectNode: any;
  disconnectNode: any;
  edges: any;
  nodes: any;
  removeEdge: any;
  removeNode: any;
}

class Graph extends React.Component<IProps, {}> {
  state = {
    sourceNode: undefined
  };

  handlePortClick = (id: string, isInport: boolean) => (
    event: React.MouseEvent<SVGTextElement>
  ) => {
    event.preventDefault();
    if (this.state.sourceNode) {
      if (isInport && this.state.sourceNode !== id) {
        const [source, outport] = this.state.sourceNode.split(">");
        const [target, inport] = id.split("<");
        this.props.connectNode(source, outport, target, inport);
        this.setState({ sourceNode: undefined });
      }
    } else {
      if (!isInport) this.setState({ sourceNode: id });
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

  handleEdgeRightClick = (target, inport) => (
    event: React.MouseEvent<SVGLineElement>
  ) => {
    event.preventDefault();
    this.props.disconnectNode(target, inport);
  };

  handleNodeMouseOver = (event: React.MouseEvent<SVGTextElement>) => {
    console.log(event);
  };

  handleNodeClick = id => (event: React.MouseEvent<SVGTextElement>) => {
    console.log(id);
  };

  render() {
    const { nodes, edges, removeNode, addNode } = this.props;

    return (
      <svg onDoubleClick={this.handleDoubleClick(addNode)}>
        {Object.entries(nodes).map(([id, n]) => (
          <Node
            component={components["Add"]}
            handleMouseOver={this.handleNodeMouseOver}
            handleNodeClick={this.handleNodeClick(id)}
            handlePortClick={this.handlePortClick}
            handleRightClick={this.handleNodeRightClick(removeNode, id)}
            id={id}
            key={id}
            {...n}
          />
        ))}
        {edges.map(([source, outport, target, inport]) => {
          return (
            <Edge
              component={components["Add"]}
              handleRightClick={this.handleEdgeRightClick}
              inport={inport}
              key={[source, target].join("-")}
              outport={outport}
              source={nodes[source]}
              target={nodes[target]}
            />
          );
        })}
      </svg>
    );
  }
}

export default Graph;
