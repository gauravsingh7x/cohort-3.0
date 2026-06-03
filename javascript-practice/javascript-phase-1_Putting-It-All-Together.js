
// Project 1: Simple Calculator

let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let result;
if (operator === "+") result = num1 + num2;
else if (operator === "-") result = num1 - num2;
else if (operator === "*") result = num1 * num2;
else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
else result = "Invalid operator";

console.log("Result:", result);


/*
Project 2: FizzBuzz (the classic interview question)
Print numbers 1 to 50. But:
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both, print "FizzBuzz"
*/
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Project 3: Number Guessing Game
let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (guess > secret) console.log("Too high!");
    else if (guess < secret) console.log("Too low!");
} while (guess !== secret);

console.log(`You got it in ${attempts} attempts!`);

// Project 4: Temperature Converter
// Take a temperature and a unit (C or F), convert to the other.
let temp = Number(prompt("Enter temperature:"));
let unit = prompt("Is it in C or F?").toUpperCase();

if (unit === "C") {
    console.log(`${temp}°C = ${(temp * 9/5) + 32}°F`);
} else if (unit === "F") {
    console.log(`${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`);
} else {
    console.log("Invalid unit");
}



//Project 5: Count Vowels in a String
let str = prompt("Enter a string:").toLowerCase();
let vowels = "aeiou";
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) count++;
}

console.log(`Number of vowels: ${count}`);


