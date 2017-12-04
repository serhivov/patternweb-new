import edges from "./edges";
import nodes from "./nodes";

describe("reducers", () => {
  describe("edges", () => {
    it("provides the initial state", () => {
      expect(edges(undefined, {})).toEqual([]);
    });

    it("handles ADD_EDGE action", () => {
      expect(edges([], { type: "ADD_EDGE", source: "a", target: "b" })).toEqual(
        [["a", "b"]]
      );
    });

    it("handles REMOVE_EDGE action", () => {
      expect(
        edges([["a", "b"]], { type: "REMOVE_EDGE", source: "a", target: "b" })
      ).toEqual([]);
    });
  });

  describe("nodes", () => {
    it("provides the initial state", () => {
      expect(nodes(undefined, {})).toEqual({});
    });

    it("handles ADD_NODE", () => {
      expect(
        nodes(undefined, { type: "ADD_NODE", id: "test", x: 10, y: 20 })
      ).toEqual({ test: { x: 10, y: 20 } });
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
        { type: "UPDATE_NODE", id: "test", x: 5, y: 8 }
      );
      expect(subject).toEqual({ test: { x: 5, y: 8 } });
    });
  });
});
