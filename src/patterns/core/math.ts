export const add = (augend, addend) => augend + addend;

export const descriptor = {
  fn: add,
  name: "Add",
  inputs: {
    augend: "number",
    addend: "number"
  }
};
