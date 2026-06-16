let person= {name:"Garv", age:25, city:"Lucknow"};


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


let merged = Object.assign({},person, {age:26, country:"India"});

console.log(merged);