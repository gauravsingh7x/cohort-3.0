



// const name = "Global"; // 3. Global Scope

// function outer() {
//   const name = "Outer"; // 2. Outer Function Scope

//   function inner() {
//     const name = "Inner"; // 1. Local Scope
//     console.log(name); 
//   }

//   inner();
// }

// outer();










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

