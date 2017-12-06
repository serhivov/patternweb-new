class Node {
  output: any;

  constructor(private component, public id: string, public args: object = {}) {}

  update(newArgs: object): Node {
    this.args = { ...this.args, ...newArgs };
    this.output = undefined;
    return this;
  }

  hasAllRequiredInputs() {
    return Object.keys(this.component.inputs)
      .filter(str => !str.endsWith("?"))
      .every(key => this.args.hasOwnProperty(key));
  }

  run(callback = null) {
    if (this.output) {
      console.log("CACHED", this.id);
    } else if (this.hasAllRequiredInputs()) {
      console.log("RUNNING", this.id);
      this.output = this.component.fn(...Object.values(this.args));
    } else {
      console.log("WAITING", this.id, this.args);
    }
  }
}

export default Node;
