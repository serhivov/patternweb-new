import Node from "./node";

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

it("can run", () => {
  const n = new Node("test", components["add"]);
  n.run();
  n.update({ a: 2 });
  n.run();
  n.update({ b: 3 });
  n.run();
  n.run();
  // console.log(JSON.stringify(n, null, 2))
  expect(n).toEqual(2);
});
