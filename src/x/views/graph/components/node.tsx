import * as React from "react";

const handleMouseOver = (event: React.MouseEvent<SVGTextElement>) => {
  // console.log(event);
};

const handleRightClick = (removeNode, id: number) => (
  event: React.MouseEvent<SVGTextElement>
) => {
  event.preventDefault();
  console.log(id);
  removeNode(id);
};

export default function Node({ id, x, y, removeNode }) {
  return (
    <text
      x={x}
      y={y}
      // onMouseOver={handleMouseOver}
      onContextMenu={handleRightClick(removeNode, id)}
    >
      {id}
    </text>
  );
}
