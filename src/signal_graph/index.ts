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
    const { nodes, signal, components, run } = this;

    if (nodes[id]) throw Error("Node already exists with that ID");
    nodes[id] = nodes[id] || new Node(components[key], id, args);

    Object.entries(args)
      .filter(([key, value]) => value.toString().startsWith("$"))
      .forEach(([key, source]) => {
        nodes[id].listeners.push(
          signal
            .filter(payload => {
              return `$${payload[0]}` === source;
            })
            .add(payload => {
              nodes[id].update({ [key]: payload[1] });
              this.run(id);
            })
        );
        this.run(source.slice(1));
      });

    // should this be run?
    // this.run(id)

    return this;
  }

  removeNode(id): this {
    this.signal.dispatch([id, undefined]);
    this.nodes[id].remove();
    delete this.nodes[id];
    return this;
  }

  updateNode(id, args, run = false): this {
    if (this.nodes[id]) {
      this.nodes[id].update(args);
      if (run) this.run(id, true);
    }
    return this;
  }

  run(id, exists = false): this {
    if (exists || this.nodes[id]) {
      this.nodes[id].run(result => {
        const toDispatch = [id, result];
        console.log(toDispatch);
        this.signal.dispatch(toDispatch);
      });
    }
    return this;
  }

  log(): this {
    console.log(JSON.stringify(this.nodes, null, 2));
    return this;
  }
}

export default SignalGraph;
