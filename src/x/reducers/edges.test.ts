import edges from "./edges";

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
});
