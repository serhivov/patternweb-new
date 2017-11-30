export function* idMaker(prefix: string) {
  let id = 0;
  while (true) {
    yield [prefix, id++].join("-");
  }
}
