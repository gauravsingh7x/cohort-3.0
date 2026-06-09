
// Question 1 (Easy) — Find Expensive Products
/*
Question 1 (Easy) — Find Expensive Products
let prices = [100, 250, 500, 150, 700];

Create a new array containing only prices greater than 300.
What is this question asking?
Imagine you're building an e-commerce website.
You only want to show premium products that cost more than ₹300.

Input:
    [100, 250, 500, 150, 700]
Output: [500, 700]

Concepts Tested
    Arrays
    filter()
*/ 










// Question 2 (Moderate) — Student Average
/*
let marks = [80,90,70,85,95];
Calculate the average marks of all students.

What is this question asking?
A teacher has marks of students stored inside an array.

You need to:
    1. Find total marks.
    2. Divide by number of students.
Output:
    84

Concepts Tested
    Arrays
    reduce()
    length property
*/







// Question 3 (Hard) — Most Frequent Number
/*
let numbers = [1,2,3,2,4,2,5,1,1,1];
Find the number that appears the most.

What is this question asking?
You're given an array containing repeated values.

You need to count how many times each number appears and find the highestone.
Output: 1
Because:
    1 appears 4 times
    2 appears 3 times

Concepts Tested
    Arrays
    Loops
    Objects for counting
    Problem solving
*/



// Objects
// Question 4 (Easy) — Update User Age
/*
let user={name:"Ritik", age:20};
Update age to 21.

What is this question asking?
You already have an object.
Just modify one property.

Expected result:
    {name:"Ritik", age:21}

Concepts Tested
    Object property access
    Object update
*/



// Question 5 (Moderate) — Print User Information
/*
let user= { name:"Ritik", age:20, city:"Bhopal"};

Print:
    Name : Ritik
    Age : 20
    City : Bhopal
using a loop.

What is this question asking?
    Instead of manually writing:
    console.log(user.name);
    console.log(user.age);

Loop through the object dynamically
Concepts Tested
    Objects
    Object.entries()
    for...of
*/ 




// Question 6 (Hard) — Highest Paid Employee
/*
let employees = {aman:25000, ritik:50000, priya:45000};
Find the employee with the highest salary.

What is this question asking?
    Compare all salaries and return:
    Ritik

Concepts Tested
    Objects
    Loops
    Comparisons
*/



// Functions
// Question 7 (Easy) — Greeting Function

/*
Create a function:
    greet(name)
Output:
    Hello JS

What is this question asking?
    Learn:
        Function declaration
        Parameters
        Arguments
*/



// Question 8 (Moderate) — Discount Calculator
/*
Create a function:
    calculateDiscount(price)

Rules: 10% discount
Input: 500
Output: 450

What is this question asking?
    Take input.
        Perform calculation.
        Return result.

Concepts Tested
    Functions
    Parameters
    Return
*/


// Question 9 (Hard) — Dynamic Sum Function
/*
Create a function:
    sum(...numbers)
that can add any amount of numbers.

    Example: sum(1,2,3)
    Output: 6

    Example: sum(1,2,3,4,5)
    Output: 15

What is this question asking?
    The function should not depend on fixed parameters.
    It should work for unlimited inputs.

Concepts Tested
    Functions
    Rest Parameters
    reduce()
*/




// Arrays + Objects + Functions Together
// These are the most important because real projects use all three together.
/*
Question 10 (Easy) — Find Adult Users
let users = [
    {name:"Ritik",age:20},
    {name:"Aman",age:16},
    {name:"Priya",age:25}
    ];

Create a function:
    getAdults(users)
Return only users whose age is 18 or above.

What is this question asking?
    You have:
        Array
        Objects inside array
        Function
Output: [
    {name:"Ritik",age:20},
    {name:"Priya",age:25}
    ]

Concepts Tested
    Array of objects
    filter()
    Functions
*/


// Question 11 (Moderate) — Shopping Cart Total
/*
let cart = [
    {name:"Mouse",price:500, qty:2},
    {name:"Keyboard",price:1000, qty:1},
    {name:"Monitor",price:10000, qty:1},
    ];

Create a function:
    getCartTotal(cart)
Output: 12000

What is this question asking?
    Each item has:
        price × quantity
Calculate total bill.

Concepts Tested
    Array of objects
    Functions
    reduce()
*/





// Question 12 (Hard) — Student Grade Report
/*
let students = [
            {
            name:"Ritik",
            marks:[80,90,85]
            },
            name:"Aman",
            marks:[50,40,60]
            }
            ];

Create a function:
    generateReport(students)
Return:
        [
            {
            name:"Ritik",
            average:85,
            grade:"A"
            },
            name:"Aman",
            average:50,
            grade:"C"
            }
        ];

What is this question asking?
    For every student:1.
    Calculate average.2.
    Decide grade.3.
    Create a new object.4.
    Return a new array.
This is extremely close to real-world frontend interview questions.

Concepts Tested
    Arrays
    Nested Arrays
    Objects
    Functions
    map()
    reduce()
    Conditional Logic
*/


// Final Challenge (Very Hard) - Mini Library Management System

/*
Create:
    
*/
