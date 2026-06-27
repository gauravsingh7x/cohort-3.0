
//beginner-functions
// 1. Create a function named `greet` that prints `"Hello World"`.
// function greet(){
//     console.log('Hello World');
// }
// greet();


// 2. Create a function `add(a, b)` that returns the sum.
// function add(a, b){
//     let sum = a+b
//     return sum;
// }
// console.log(add(5, 4));


// 3. Write a function to calculate the square of a number.
// function square(a){
//     let sq = a**2;
//     return sq;
// }
// console.log(square(5));


// 4. Create a function that checks whether a number is even or odd.
// function evenOdd(a){
//     if(a%2==0){
//         console.log('Even');
//     }else{
//         console.log('Odd');
//     }
// }
// evenOdd(6);


// 5. Write a function that converts Celsius to Fahrenheit.
// function c_F(cel){
//     let fahren = ((cel*9/5)+32);
//     return fahren;
// }
// console.log(c_F(5));


// 6. Create a function with default parameter `"Guest"`.
// function def(name="Guest"){
//     console.log(name + "");
// }
// def();


// 7. Write a function that returns the greater of two numbers.
// function great(a, b){
//     if(a>b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }
// }
// great(5, 7);


// 8. Create a function to calculate area of rectangle.
// function calArea(l, w){
//     return l*w;
// }
// console.log(calArea(7,5));


// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// function adu(age){
//     if(age>=18){
//         console.log('Adult');
//     }else{
//         console.log('Minor');
//     }
// }
// adu(18);


// 10. Create a function to reverse a string.
// function rev(str){
//     let curr = str.split('');
//     let reve = curr.reverse().join('');
//     console.log(reve);
// }
// rev('hello');


// Inetemediate-functions
// 1. Write a function expression for multiplication.
// const multi = function multiplication(a,b){
//     return a*b;
// }
// console.log(multi(4, 5));


// 2. Convert a normal function into an arrow function.
// const mul = (a,b) => a*b;
// console.log(mul(7,5));

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// function summ(...num){
//     let sum=num.reduce((ind, prev) => prev+ind);
//     return sum;
// }
// console.log(summ(1,2,3,4,5,6,7));


// 4. Write a function that counts vowels in a string.
// function vowelsCount(str){
//     let currArray = str.toLowerCase().split('');
//     let vowels = 'aeiou';
//     let count = 0; 
//     currArray.map((index)=>{
//         if(vowels.includes(index)){
//             count++
//         }
//     })
//     return count;
// }
// console.log(vowelsCount('gaurav singh'));


// 5. Create a function that checks if a string is palindrome.
// function palindrome(str){
//         let copy = str;
//         let curr = str.split('');
//         let rever = curr.reverse().join('');
//         if(copy === rever){
//             console.log('Palindrome');
//         }else{
//             console.log('Not Palindrome');
//         }
// }
// palindrome('gaurav')


// 6. Write a callback function example using `setTimeout`.
// const id = setTimeout(()=>{
//     console.log('Delay')
// },1000)
// console.log(id);

// const id = setInterval(()=>{
//     console.log('Delay')
// },5000)
// console.log(id);


// 7. Create a higher-order function that executes another function twice.
// const greet1 = ()=>{
//     console.log("will be call back")
// }

// const highOrder = (ar) =>{
//     ar()
//     return ()=>{
//         console.log('return callback')
//     }
// }
// let highO = highOrder(greet1);
// highO() //return will be callback
// console.log(highO()); 


// 8. Write a function that returns another function.
// const newFun = (br)=>{
//     br();
//     return 0;
// }
// console.log(newFun(greet1));


// 9. Create a pure function for subtraction.
// const sub = (h,g)=>{
//     return h+g;
// }
// console.log(sub(2,5));


// 10. Create an impure function using global variable modification.
// let count = 0;
// const impu = ()=>{
//     count = count + 1;
//     console.log(count)
// }
// impu()      //c =0+1
// impu()      //c =1+1
// impu()      //c =2+1
// impu()      //c =3+1
// impu()      //c =4+1


// Advance
// 1. Write a recursive function for factorial.
// function factorial(n) {
//    if (n === 0 || n === 1) return 1;
//    return n * factorial(n - 1);
// }
// console.log(factorial(5));



// 2. Write recursive Fibonacci function.



// 3. Create a function that finds power using recursion.



// 4. Create an IIFE that prints `"Executed"`.
//1st way
// (function(){
//     console.log('Executed');
// })()

//2nd way
// (()=>console.log('Executed'))()


// 5. Write a function that memoizes factorial calculation.




// 6. Create a closure counter function.



// 7. Write a function currying example for addition.



// 8. Create debounce function logic.



// 9. Create throttle function logic.



// 10. Write a function that executes only once.



// 11. Create custom implementation of `map`.



// 12. Create custom implementation of `filter`.



// 13. Create custom implementation of `reduce`.




// 14. Create custom `forEach`.



// 15. Explain output:
// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());



// Arrays Basics - Beginner
// 1. Create an array of 5 fruits.
let fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];
console.log(fruits);
console.log(fruits[1]);

// 2. Print first and last element of array.
console.log(fruits[0], fruits[fruits.length-1]);

// 3. Find length of array.
console.log(fruits.length);

// 4. Add element at end using `push`.
console.log(fruits.push('grapes'));
//will return no. of elements(count), not array
console.log(fruits);

// 5. Remove last element using `pop`.
console.log(fruits.pop());
//remove but gives you this time only that last element 
console.log(fruits);

// 6. Add element at beginning using `unshift`.
console.log(fruits.unshift('pine-apple'));
//will return no. of elements not array
console.log(fruits);

// 7. Remove first element using `shift`.
console.log(fruits.shift());
////will return 1st elements of array lasl time then remove
console.log(fruits)

// 8. Reverse an array.
console.log(fruits.reverse());

// 9. Sort numbers ascending.
let arr = [2,5,9,7,38,100]
console.log(arr.sort((a,b)=>a-b));

// 10. Sort numbers descending.
console.log(arr.sort((a,b)=>b-a));


// Arrays Basics - Intermediate
// 1. Use `splice` to remove elements.
let arrNum = [1, 6, 5, 3, 7, 10];
let arrStr = ['garv', 'akshay', 'utkarsh', 'sumit', 'kina'];
arrNum.splice(2, 6); //2 is indx and no of ele to be removed (indx ele also will be removed which given)
arrStr.splice(2, 1); //2 is indx and no of ele to be removed
console.log(arrNum);
console.log(arrStr);

// 2. Use `splice` to insert elements.
arrNum.splice(2, 3, 2, 4, 6);    //2 is indx, 3 is no. of ele to be added then elemets for added
console.log(arrNum);
arrStr.splice(3, 1, 'subrat bhai');
console.log(arrStr);

// 3. Use `slice` to copy array.
let newArrNum = arrNum.slice(0, arrNum.length)
console.log(newArrNum);

// 4. Find index of an element.
console.log(newArrNum.indexOf(4));

// 5. Check if array contains a value.
console.log(newArrNum.includes(4));

// 6. Join array elements with .
console.log(newArrNum.join('_'));

// 7. Merge two arrays using spread operator.


// 8. Copy array using spread operator.


// 9. Find maximum value using `Math.max`.


// 10. Swap two variables using destructuring.
let Arr = [1, 7];
let a = Arr[0];
let b = Arr[1];
[b,a] = [a,b];
console.log(a,b);


// Array Iteration Methods
