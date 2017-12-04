import * as React from "react";

export default function Node({ id, x, y, handleRightClick, handleMouseOver }) {
  return (
    <text
      x={x}
      y={y}
      onMouseOver={handleMouseOver}
      onContextMenu={handleRightClick}
    >
      {id}
    </text>
  );
}
