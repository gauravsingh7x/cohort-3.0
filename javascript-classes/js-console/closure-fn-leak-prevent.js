
// Separate the Scopes
/*
The absolute best defense is to not let the heavy data and the long-lived function live in the same parent block.
If they don't share a parent function, V8 creates entirely separate context objects.
*/


// Move the heavy operation into its own isolated function
function processHeavyData() {
  let bigData = "x".repeat(10000000); 
  // Do whatever you need with bigData here
  console.log(bigData.length); 
}

function outerFunction() {
  processHeavyData(); // Executed and immediately eligible for GC

  let smallData = "Just a sliver";
  return function innocentClosure() {
    console.log(smallData); // Only closes over smallData
  };
}



//Nullify the Reference (The Manual Override)
/*
If you absolutely must keep both inner functions in the same scope,
you can manually break the reference to the large object once you are done using it.
Setting bigData = null clears the memory, so even if the closure retains the variable name,
it’s no longer holding onto a massive payload.
*/
function outerFunction() {
  let bigData = "x".repeat(10000000);
  let smallData = "Just a sliver";

  function leakingClosure() {
    console.log(bigData);
  }
  
  // Use it, then immediately sever the link
  leakingClosure();
  bigData = null; // The 10MB string is now freed for Garbage Collection!

  return function innocentClosure() {
    console.log(smallData);
  };
}



// Pass Data as Arguments (The Functional Approach)
/*
Instead of relying on lexical scoping to grab variables from the ether,
pass exactly what the inner function needs as an argument.
This avoids creating a closure over the broader environment entirely.
*/
function createInnocentFn(data) {
  // This scope ONLY knows about smallData
  return function() {
    console.log(data);
  };
}

function outerFunction() {
  let bigData = "x".repeat(10000000);
  let smallData = "Just a sliver";

  // ... do things with bigData ...

  // Pass only what's needed out of this scope
  return createInnocentFn(smallData); 
}