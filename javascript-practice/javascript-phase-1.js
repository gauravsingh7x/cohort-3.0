//console-basics
// Print "Hello JavaScript" in the console.
console.log('log for General messages');
console.log('Hello JavaScript');


// Print your name, age, and city using one console.log().
console.log('Gauarv Singh', 25, 'Lucknow');


// Print a warning message using console.warn().
console.warn('warn for Warnings');
console.warn("This is a warning!");


// Print an error message using console.error().
console.error("error for Errors");
console.error("error for Errors");


// Use console.table() to display an array of 5 numbers.
// Array
const arr = [ "Array", 1, 2, 3, 4, 5]
console.table(arr);
// Array of Objects
const user = [
    {name: "Array of Objects", age: 3 },
    {name: "Gaurav Singh", age: 27 },
    {name: "Anuradha Singh", age: 25 }
]
console.table(user);



// variables
// Create a variable called studentName and store your name in it.
var studentName="Gaurav Singh";


// Create a variable age and print it.
var age = 27;
console.log(age);


// Create two variables and swap their values.
let a = 5;
let b = 7;
// 1. Pour a into the temporary glass
let temp = a;
// 2. Now that glass 'a' is empty, pour b into a
a = b,
// 3. Pour the temporary glass into b
b = temp;
console.log(a);
console.log(b);


// Create a constant variable for PI and print it.
const pi = "PI";
console.log(pi);


// Declare a variable without assigning a value and print it.
var c;
console.log(c);


// Create a variable score and increase it by 10.
var score=0;
score += 10;
console.log(score);


// Create three variables for first name, last name, and full name.
let fname = "Gaurav";
let lname = "Singh";
let full_name = "Gaurav Singh";
console.log(fname + "\n" + lname + "\n" + full_name);


// datatypes
// Create variables of type string, number, boolean, null, and undefined.
var fullname = "Gaurav Singh";
var num = 12345;
var boo = true;
var temp_null = null;
var d;
console.log(fullname, num, boo, temp_null, d);


// Check the type of different variables using typeof
console.log(typeof(fullname), typeof(num), typeof(boo), typeof(temp_null), typeof(d));


// Store your mobile number in a variable and check its type.
var mobile = 95546555;
console.log(typeof(mobile));


// Create a variable with value null and check its type.
var temp2 = null;
console.log(typeof(temp2));


// Create a bigint number and print it
var big_number = 10000055464654659559595n;
console.log(big_number);



// operators
// 1. Add two numbers and print the result.
var num2 = 5;
var num3 = 7;
console.log(num2+num3);


// 2. Find the remainder when 25 is divided by 4
let num4 = 25;
let num5 = 4;
console.log(num4%num5);


// 3. Find the square of a number using exponent operator.
let square = 25 ** 2;
console.log(square);
// Think of  as the math symbol for exponents number^2.
// If you wanted to find the cube of a number number^3, you would just use number  3.


// 4. Increment a variable using `++`.
let incr = 25;
// pre incr
console.log(++incr); 
// here incr is 26
// post incr 
console.log(incr++);


// 5. Decrement a variable using `--`.
let decr = 25;
// pre decre
console.log(--decr);


// 6. Use `+=` operator to increase a variable by 20.
let opvar = 25;
opvar += 20;
console.log(opvar);


// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
console.log(25 > 5);
console.log(15 < 5);
console.log(2 >= 5);
console.log(5 <= 7);


// 8. Check if two values are strictly equal using `===`.
let str2 = "Gaurav";
let str3 = "Akshay";
console.log(str2 === str3);


// 9. Compare `"10"` and `10` using both `==` and `===`.
console.log("10" == '10');
console.log("10" === '10');


// 10. Create two boolean variables and test `&&`, `||`, and `!`.
let t = true;
let f = false;
console.log(t && f);
console.log(t || f);
console.log(!t);
console.log(!f);



// ternary-operator
// 1. Check whether a number is even or odd using ternary operator.


// 2. Check whether age is above 18 using ternary operator.


// 3. Find the greater number between two values using ternary operator.





// string
// 1. Create a string and print its length.
let string3 = "Gaurav Singh";
console.log(string3.length);
//lenght is method

// 2. Convert a string into uppercase.
// console.log(string3.toUpperCase);      // erro > ƒ toUpperCase() { [native code] } means you missed complete fun
console.log(string3.toUpperCase());


// 3. Convert a string into lowercase.
console.log(string3.toLowerCase());


// 4. Check if a string includes the word `"JavaScript"`.
let sen = "We're practcing JavaScript";
console.log(sen.includes("JavaScript"));

// 5. Extract the word `"World"` from `"Hello World"`.
let hello = "Hello World";
let crop = hello.slice(6);
console.log(crop);


// 6. Replace `"apple"` with `"mango"` in a sentence.
let fruits = "apple";
let new_fruits = fruits.replace("apple", "mango");
console.log(new_fruits);


// 7. Split `"HTML,CSS,JS"` into an array.
let webd = "HTML,CSS,JS";
let arrr = webd.split(",");
console.log(arrr);


// 8. Remove extra spaces from a string.
let str2 = " Gaurav Singh ".trim();
console.log(str2);


// 9. Repeat the word `"Hi"` 5 times.
let str3 = "Hi".repeat(5);
console.log(str3);


// 10. Print the first character of a string.
// let str4 = "Gaurav Singh".charAt(0);
let str4 = "Gaurav Singh";
console.log(str4[0]);


// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
let str5 = `My name is Aman and I am 20 years old`;
console.log(str5);



// type-conversion-coercion
// Convert the string "50" into a number.
let num1 = Number('50');
console.log(num1);


// Convert the number 100 into a string.
let a2 = 100;
// concatination
// a2 = ""+a2;
// type casting
var a3 = String(a2);
console.log(typeof(a3));


// Convert "true" into a boolean.
var str = "true";
var str1 = Boolean(str)
console.log(typeof(str1));


// Check the output of:
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false + 1);


// Create a variable with value "123abc" and convert it into a number.
var val = Number("123abc");
console.log(val);


// Use parseInt() on "500px".
var prnt = parseInt("500px75")
console.log(prnt);
/*
Here is the exact step-by-step logic parseInt("500px") follows:
"Ah, a number!" (Keeps it)
"Another number." (Keeps it, now 50)
"Another number." (Keeps it, now 500)
"Stop! That is a letter, not a number."
The moment it hits the p, it stops completely, ignores everything else to the right,
and returns 500 as an actual number type.
*/



// truthy-falsy
// 1. Check whether an empty string is truthy or falsy.


// 2. Check whether `0` is truthy or falsy.


// 3. Check whether `[]` is truthy or falsy.


// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

