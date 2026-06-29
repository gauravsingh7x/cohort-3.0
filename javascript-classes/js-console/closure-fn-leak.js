/*
The Rule of Thumb for Juniors: >
Closures are like standard luggage tags—if you pack two functions in the same suitcase (outerFunction),
they both get tagged with everything inside it.
If you want a function to travel light, give it its own separate suitcase.
*/

function outerFunction() {
  let bigData = "x".repeat(10000000); // 10MB string
  let smallData = "Just a sliver";
  let leakingClo = "leakingClosure"

  function leakingClosure() {
    // This one keeps bigData alive!
    console.log(bigData);
  }

  function leakingClosure2() {
    // This one keeps bigData alive!
    console.log(leakingClo);
  }


  function innocentClosure() {
    // This one only needs smallData... or does it?
    console.log(smallData);
  }

  return innocentClosure; 
}

const myFn = outerFunction();
console.dir(myFn);