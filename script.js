function* test() {
  console.log("First");

  yield 1;

//   return 1.5;

  console.log('Second');

  yield 2;

  console.log('Third');

  yield 3;

  console.log('Fourth');

  yield 4;
  console.log('Fifth');
  return 5
}

const generator = test();

// const result=generator.next();

console.log('Before');

console.log(generator.next());

console.log('After next-1');

console.log(generator.next());
// generator.next();

console.log('After next-2');

console.log(generator.next());
// generator.next();

console.log('After next-3');

console.log(generator.next());

console.log('After next-4');

console.log(generator.next());
