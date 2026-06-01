
// Regular function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function — same thing
const add = (a, b) => {
    return a + b;
};

// Single expression → implicit return (no braces, no return keyword)
const sub = (a, b) => a - b;
console.log(sub);

// Single parameter → parentheses optional
const square = x => x * x;
console.log(square);

// No parameters → empty parentheses required
const greet = () => console.log("Hello");
console.log(greet);

// Multi-line body → braces and explicit return required
const add = (a, b) => {
    const sum = a + b;
    return sum;
};

console.log(add);