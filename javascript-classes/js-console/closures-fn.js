


function outerFunction() {
    let user = "Gaurav Singh";

  function innerFunction() {
    let mobile = "955XX55500";
    console.log("Outer -> ", user);
    console.log("Inner -> ", mobile);
    
  }
  return innerFunction;
  //1. returning only whole innerFunction
}

// console.log(outerFunction());
// 1. getting whole innerFunction like object

let fn = outerFunction();
fn();

