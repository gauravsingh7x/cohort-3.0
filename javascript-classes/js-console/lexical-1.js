
const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am from outer";

  // console.log(innerVar);
  // parent cannot access the child fun variables
  // can only access his parent (upto global execution context)

  console.log("outer funtion can access Global Variable ", globalVar);
  // so outerFunction lexical enviroment upto global execution

  function innerFunction() {
    const innerVar = "I am local";
    
    // Looks locally -> finds innerVar
    console.log("Simple! locally accessing", innerVar); 

    // Looks locally (no) -> looks to outerFunction -> finds outerVar
    console.log("inner funtion can access Parent Variable ", outerVar); 
    
    // Looks locally (no) -> looks to outer (no) -> looks to global -> finds globalVar
    console.log("inner funtion can access Global Variable too", globalVar); 
    // so innerFunction lexical enviroment upto global execution including parents
  }

  innerFunction();
}

outerFunction();

// undefined 
// return undefined; -> implicit (Since there is no return, JavaScript automatically does)
