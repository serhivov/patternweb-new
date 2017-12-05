import * as React from "react";
import Port from "./port";

export default function Node({
  id,
  x,
  y,
  handleRightClick,
  // handleMouseOver,
  handleClick,
  handleNodeClick,
  component,
  inports
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        onClick={handleClick}
        // onMouseOver={handleMouseOver}
        onContextMenu={handleRightClick}
      >
        {id}
      </text>
      <text y={20}>{component}</text>
      {Object.keys(inports).map((port, i) => (
        <Port
          key={port}
          name={port}
          handleClick={handleNodeClick}
          id={[id, port].join(">")}
          i={i}
        />
      ))}
    </g>
  );
}
