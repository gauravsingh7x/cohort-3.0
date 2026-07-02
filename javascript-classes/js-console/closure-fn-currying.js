
// Currying — transforming a function with many arguments into a chain of functions each taking one argument.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3)); // 6