class Node {
  output: any;
  listeners = [];

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

  hasNoAliasInputs() {
    return Object.values(this.args).every(v => !v.toString().startsWith("$"));
  }

  run(callback = null) {
    if (this.output) {
      console.log("CACHED", this.id);
    } else if (this.hasAllRequiredInputs() && this.hasNoAliasInputs()) {
      console.log("RUNNING", this.id);
      this.output = this.component.fn(...Object.values(this.args));
      if (callback) callback(this.output);
    } else {
      console.log("WAITING", this.id, this.args);
    }
  }
}

export default Node;
