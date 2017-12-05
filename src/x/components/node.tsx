import * as React from "react";
import Port from "./port";

export default function Node({
  id,
  x,
  y,
  handleRightClick,
  handleClick,
  handleNodeClick,
  component,
  inports
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        className="name"
        onClick={handleClick}
        onContextMenu={handleRightClick}
      >
        {component}
      </text>

      <g className="inports">
        {Object.keys(inports).map((port, i) => (
          <Port
            key={port}
            name={port}
            handleClick={handleNodeClick}
            id={[id, port].join(">")}
            i={i}
            inport={true}
          />
        ))}
      </g>

      <g className="outports">
        <Port
          name="out"
          handleClick={handleNodeClick}
          id={[id, "out"].join(">")}
          i={0}
          inport={false}
        />
      </g>
    </g>
  );
}
