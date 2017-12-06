const functions = {
  Add: {
    fn: (augend = 1, addend = 1) => augend + addend,
    inports: {
      augend: "number",
      addend: "number"
    }
  },
  Subtract: {
    fn: (augend = 1, addend = 1) => augend + addend,
    inports: {
      minuend: "number",
      subtrahend: "number"
    }
  }
};

export default functions;
