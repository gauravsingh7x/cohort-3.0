
//If no argument is passed, use a default value:

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Gaurav");    // Hello, Aman
greet(157);    // Hello, 157
greet();          // Hello, Guest