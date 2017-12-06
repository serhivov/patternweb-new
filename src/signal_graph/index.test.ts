import SignalGraph from "./index";

const components = {
  add: {
    fn: (a, b) => a + b,
    inputs: {
      a: "number",
      b: "number",
      "c?": "number"
    }
  }
};

it("has nodes", () => {
  const sg = new SignalGraph(components);
  sg
    .addNode("add", "add2", { b: 1 })
    .updateNode("add2", { a: 2 })
    .log();

  expect(sg).toBeTruthy();
});
