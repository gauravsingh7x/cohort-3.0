
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
function test() {
    return;
    console.log("Hello");
}
console.log(test());