const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am from outer";

  function innerFunction(a) {
    const innerVar = "I am local";
    console.log(innerVar);
    console.log(globalVar);
    console.log(outerVar);

    return "innerFun";
  }
  return innerFunction(10);
}

outerFunction();
console.log("--------"),
console.log(outerFunction())
