import * as React from "react";
import Node from "./node";
import Edge from "./edge";

const handleDoubleClick = addNode => (
  event: React.MouseEvent<SVGSVGElement>
) => {
  event.preventDefault();
  const { clientX: x, clientY: y } = event;
  addNode(x, y);
};

const handleNodeRightClick = (removeNode, id: string) => (
  event: React.MouseEvent<SVGTextElement>
) => {
  event.preventDefault();
  removeNode(id);
};

const handleNodeMouseOver = (event: React.MouseEvent<SVGTextElement>) => {
  console.log(event);
};

const Graph = ({ nodes, edges, removeNode, addNode }) => (
  <svg onDoubleClick={handleDoubleClick(addNode)}>
    {Object.entries(nodes).map(([id, n]) => (
      <Node
        key={id}
        id={id}
        handleRightClick={handleNodeRightClick(removeNode, id)}
        handleMouseOver={handleNodeMouseOver}
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

export default Graph;
