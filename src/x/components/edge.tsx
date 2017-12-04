import * as React from "react";

export default function Edge({ source, target }) {
  return <line x1={source.x} y1={source.y} x2={target.x} y2={target.y} />;
}
