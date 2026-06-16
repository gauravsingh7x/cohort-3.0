
let person = {name:"Gauarv", age:25};

console.log(person);
// console.log(person[full name]);

//Copy
let copy = {...person};
console.log(copy);

//Combine
let extra = {city:"Lucknow", state:"UP"};
let combine = {...person, ...extra};
//person + extra > added
console.log(combine);

//override
let update = {...person, age:26};
console.log(update);