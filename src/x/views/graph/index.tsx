import * as React from "react";
import Node from "./components/node";
import {v4} from "uuid";

interface IState {
  nodes: object;
}

function* idMaker() {
  let id = 0;
  yield id++;
}
const id = idMaker();

export default class Graph extends React.Component<{}, IState> {

  state = {
    nodes: {
      something: { x: 10, y: 10 },
      anotherThing: { x: 20, y: 30 },
      more: { x: 50, y: 50 }
    }
  };

  handleDoubleClick = (event:React.MouseEvent<SVGSVGElement>) => {
    const {clientX:x, clientY:y} = event;
    this.setState(prevState => {
      prevState.nodes[id.next().value] = { x, y }
      return prevState
    })
  }

  render() {
    const { nodes } = this.state;
    return (
      <svg onDoubleClick={this.handleDoubleClick}>
        {Object.entries(nodes).map(([id, n]) => (
          <Node key={id} id={id} {...n} />
        ))}
      </svg>
    );
  }
}
