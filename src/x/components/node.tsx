import * as React from "react";
import Port from "./port";

export default function Node({
  id,
  x,
  y,
  handleRightClick,
  handlePortClick,
  handleNodeClick,
  fn,
  component
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        className="name"
        onContextMenu={handleRightClick}
        onClick={handleNodeClick}
      >
        {fn}
      </text>

      <g className="inports">
        {Object.keys(component.inports).map((port, i) => (
          <Port
            key={port}
            name={port}
            handleClick={handlePortClick}
            id={[id, port].join("<")}
            i={i}
            inport={true}
          />
        ))}
      </g>

      <g className="outports">
        <Port
          name="out"
          handleClick={handlePortClick}
          id={[id, "out"].join(">")}
          i={0}
          inport={false}
        />
      </g>
    </g>
  );
}
