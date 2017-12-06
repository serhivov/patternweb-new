import * as React from "react";

export default function Edge({
  component,
  source,
  outport,
  target,
  inport,
  handleRightClick
}) {
  return (
    <line
      onContextMenu={handleRightClick(target, inport)}
      x1={source.x + 120}
      y1={source.y + 20}
      x2={target.x}
      y2={target.y + Object.keys(component.inports).indexOf(inport) * 20 + 20 }
    />
  );
}
