import * as React from "react";

export default function Node({
  id,
  x,
  y,
  handleRightClick,
  handleMouseOver,
  handleClick
}) {
  return (
    <text
      x={x}
      y={y}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onContextMenu={handleRightClick}
    >
      {id}
    </text>
  );
}
