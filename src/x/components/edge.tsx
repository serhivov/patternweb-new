import * as React from "react";

export default function Edge({
  source,
  outport,
  target,
  inport,
  handleRightClick
}) {
  return (
    <line
      onContextMenu={handleRightClick(target, inport)}
      x1={source.x}
      y1={source.y}
      x2={target.x}
      y2={target.y}
    />
  );
}
