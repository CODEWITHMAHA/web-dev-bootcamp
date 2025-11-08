let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

let c = 10;
let d = a;
d = 20;
console.log(c); // 10

let obj1 = { name: "Maha" };
console.log(obj1.name);
let obj2 = obj1;
obj2.name = "Khan";
console.log(obj1.name); // Khan
console.log(obj2.name); // Khan


typeof "Hello" // "string"
typeof 10 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" (this is a historical bug)
typeof Symbol() // "symbol"
typeof 123n // "bigint"

function modify(x) {
  x = x + 10;
}

let num = 5;
modify(num);


console.log(num); // 5 ✅ (not changed)

console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
 
console.log(NaN == NaN); //false
