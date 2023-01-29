function* test() {
  console.log("First");
}

const generator = test();

generator.next();

console.dir(generator);
