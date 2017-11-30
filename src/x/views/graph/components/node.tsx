import * as React from "react";

export default function Node({ id, x, y }) {
  return (
    <text x={x} y={y}>{id}</text>
  );
}
