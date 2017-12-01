import * as React from "react";
import Node from "./components/node";
import Edge from "./components/edge";
import { idMaker } from "../../../patterns/core/id";

const nodeID = idMaker("node");

interface IState {
  nodes: object;
  edges: Map<string, string>;
}

export default class Graph extends React.Component<{}, IState> {

  state = {
    nodes: {
      something: { x: 10, y: 10 },
      anotherThing: { x: 20, y: 30 },
      more: { x: 50, y: 50 }
    },
    edges: new Map([["something", "anotherThing"]])
  };

  handleDoubleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const { clientX: x, clientY: y } = event;
    this.setState(prevState => {
      prevState.nodes[nodeID.next().value] = { x, y };
      return prevState;
    });
  };

  render() {
    const { nodes, edges } = this.state;
    return (
      <svg onDoubleClick={this.handleDoubleClick}>
        {Object.entries(nodes).map(([id, n]) => (
          <Node key={id} id={id} {...n} />
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
