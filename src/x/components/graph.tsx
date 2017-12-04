import * as React from "react";
import Node from "../views/graph/components/node";

const handleDoubleClick = addNode => (
  event: React.MouseEvent<SVGSVGElement>
) => {
  event.preventDefault();
  const { clientX: x, clientY: y } = event;
  addNode(x, y);
};

const Graph = ({ nodes, removeNode, addNode }) => (
  <svg onDoubleClick={handleDoubleClick(addNode)}>
    {Object.entries(nodes).map(([id, n]) => (
      <Node key={id} id={id} removeNode={removeNode} {...n} />
    ))}
  </svg>
);

export default Graph;
