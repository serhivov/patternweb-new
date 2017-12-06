import { Signal } from "micro-signals";
import Node from "./node";

class SignalGraph {
  private signal;
  private nodes = {};

  constructor(private components) {
    this.signal = new Signal();
    this.nodes = {};
  }

  addNode(key, id, args): this {
    if (this.nodes[id]) throw Error("Node already exists with that ID");
    this.nodes[id] = this.nodes[id] || new Node(this.components[key], id, args);
    return this;
  }

  removeNode(id): this {
    this.signal.dispatch([id, undefined]);
    this.nodes[id].remove();
    delete this.nodes[id];
    return this;
  }

  updateNode(id, args): this {
    if (this.nodes[id]) {
      this.nodes[id].update(args);
      this.run(id, true);
    }
    return this;
  }

  run(id, exists = false): this {
    if (exists || this.nodes[id]) {
      this.nodes[id].run(result => this.signal.dispatch([id, result]));
    }
    return this;
  }

  log(): this {
    console.log(JSON.stringify(this.nodes, null, 2));
    return this;
  }
}

export default SignalGraph;
