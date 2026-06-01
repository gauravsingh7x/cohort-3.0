
//for...in Loop (for objects — brief intro)

let person = { name: "Gaurav", age: 27 };
for (let key in person) {
    console.log(key, ":", person[key]);
}