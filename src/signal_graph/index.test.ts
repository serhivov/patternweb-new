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
    .addNode("add", "add1", { a: 2, b: 1 })
    .addNode("add", "add2", { a: "$add1", b: 10 })
    .log();

  expect(sg).toBeTruthy();
});
