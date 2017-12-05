import * as React from "react";

function Port({ name, i, id, handleClick }) {
  return (
    <text id={id} onClick={handleClick(id)} y={40 + 20 * i}>
      {name}
    </text>
  );
}

export default Port;
