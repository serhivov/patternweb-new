import * as React from "react";

function Port({ name, i, id, handleClick, inport }) {
  return (
    <text
      id={id}
      onClick={handleClick(id)}
      x={inport ? 0 : 120}
      y={25 + 20 * i}
    >
      {name}
    </text>
  );
}

export default Port;
