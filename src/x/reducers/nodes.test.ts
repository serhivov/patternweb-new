import nodes from "./nodes";

describe("reducers", () => {
  describe("nodes", () => {
    it("provides the initial state", () => {
      expect(nodes(undefined, {})).toEqual({});
    });

    it("handles ADD_NODE", () => {
      expect(
        nodes(undefined, {
          type: "ADD_NODE",
          id: "test",
          x: 10,
          y: 20,
          fn: "Add"
        })
      ).toEqual({ test: { x: 10, y: 20, fn: "Add" } });
    });

    it("handles REMOVE_NODE", () => {
      const subject = nodes(
        {
          test: { x: 10, y: 20 }
        },
        { type: "REMOVE_NODE", id: "test" }
      );
      expect(subject).toEqual({});
    });

    it("handles UPDATE_NODE", () => {
      const subject = nodes(
        {
          test: { x: 10, y: 20 }
        },
        { type: "UPDATE_NODE", id: "test", x: 5, y: 8, fn: "Add" }
      );
      expect(subject).toEqual({ test: { x: 5, y: 8, fn: "Add" } });
    });

    it("handles CONNECT_NODE", () => {
      const subject = nodes(
        {
          test: { x: 10, y: 20 },
          another: { x: 50, y: 50 }
        },
        {
          type: "CONNECT_NODE",
          source: "test",
          outport: "b",
          target: "another",
          inport: "a"
        }
      );
      expect(subject).toEqual({
        test: { x: 10, y: 20 },
        another: { x: 50, y: 50, args: { a: "$test>b" } }
      });
    });

    it("handles CONNECT_NODE without outport", () => {
      const subject = nodes(
        {
          test: { x: 10, y: 20 },
          another: { x: 50, y: 50 }
        },
        {
          type: "CONNECT_NODE",
          source: "test",
          target: "another",
          inport: "a"
        }
      );
      expect(subject).toEqual({
        test: { x: 10, y: 20 },
        another: { x: 50, y: 50, args: { a: "$test>" } }
      });
    });
  });
});
