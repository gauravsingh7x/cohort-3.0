
//A function can also be stored in a variable.


greet("Aman");  //hoisting not possible

const greet = function(name) {
    console.log("Hello, " + name);
};

greet("Aman");