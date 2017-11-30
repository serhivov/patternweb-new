import * as Wren from "./patterns/wikihouse/wren";
import * as Clipper from "./patterns/clipper";
import * as t from "transducers-js";
import * as Rx from "rxjs";

const points = Wren.points(20, 30);
console.log(Clipper.offset(-5)(points));
console.log(Clipper.offset(5)(points));

const a$ = Rx.Observable.from([20]);
const b$ = Rx.Observable.from([10, 40]);

const combo$ = Rx.Observable.combineLatest(a$, b$);

combo$.subscribe(console.log);

// const add = (a,b) => a + b
// const sub = (a,b) => a - b
