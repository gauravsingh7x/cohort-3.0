let str = "42";
let num = Number(str);     // converts "42" to 42
console.log(typeof num);   // "number"

let n = 100;
let s = String(n);         // converts 100 to "100"
console.log(s, typeof(s))

let val = "hello";
let b = Boolean(val);      // true (non-empty string is truthy)
console.log(b, typeof(b));