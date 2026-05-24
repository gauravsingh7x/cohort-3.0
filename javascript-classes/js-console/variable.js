let name = "Aman";         // string
console.log(name, typeof(name));
let age = 25;              // number
console.log(age, typeof(age));
let isStudent = true;      // boolean
console.log(isStudent, typeof(isStudent));
let car = null;            // null - "no car right now, intentionally"
console.log(car, typeof(null));
let job;                   // undefined - never assigned
console.log(job,typeof(job));
let id = Symbol("uid");    // symbol
console.log(id, typeof(id));
let bigNum = 12345678901234567890n; // bigint (note the 'n')
console.log(bigNum, typeof(bigNum));
console.log(typeof(NaN));