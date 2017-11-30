import * as React from "react";

const handleMouseOver = (event: React.MouseEvent<SVGTextElement>) => {
  console.log(event);
};

export default function Node({ id, x, y }) {
  return (
    <text x={x} y={y} onMouseOver={handleMouseOver}>
      {id}
    </text>
  );
}
