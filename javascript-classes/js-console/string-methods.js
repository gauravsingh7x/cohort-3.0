
//Important: Strings are immutable. Methods don't change the original — they return a new string.

let s = "Hello, World!";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(7, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(", "));         // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[0]);                  // "H" (also works)

//Important: Strings are immutable. Methods don't change the original — they return a new string.

let x = "hello";
x.toUpperCase();
console.log(x); // "hello" — unchanged!
x = x.toUpperCase();
console.log(x); // "HELLO"