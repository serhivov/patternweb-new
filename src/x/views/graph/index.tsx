import * as React from "react";
import Node from "./components/node";

interface IProps {}

interface IState {
  nodes: object;
}

export default class Graph extends React.Component<IProps, IState> {
  state = {
    nodes: {
      something: { x: 10, y: 10 },
      anotherThing: { x: 20, y: 30 }
    }
  };

  render() {
    const { nodes } = this.state;
    return (
      <div>
        {Object.entries(nodes).map(([id, n]) => (
          <Node key={id} id={id} {...n} />
        ))}
      </div>
    );
  }
}
