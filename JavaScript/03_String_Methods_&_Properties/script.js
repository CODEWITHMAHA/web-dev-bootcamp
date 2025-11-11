 let str = "  Hello, World!  ";
      console.log(str.length); // 17
      console.log(str.trim()); // "Hello, World!"
      console.log(str.toUpperCase()); // "  HELLO, WORLD!  "
      console.log(str.indexOf("World")); // 9
      console.log(str.slice(2, 7)); // "Hello"

let name = "   Alice";
console.log(name.includes("Al"));  // true
console.log(name.trim());          // "Alice"
console.log(name.indexOf("A"));    // 3
console.log(name.toLowerCase()); // "   alice"
console.log(name.length);       // 8

console.log(name.indexOf("Bob"));  // -1
console.log(name.replace("Alice", "Bob")); // "   Bob"
console.log(name.replaceAll("A", "E")); // "   Elice"


let phrase = "JavaScript is fun. I love JavaScript!";

let newPhrase = phrase.concat( ' ' , "Let's code!");
console.log(newPhrase);


const lastFourDigits = "1234";
const maskedAccountNumber = lastFourDigits.padStart(16, '*'); //************1234
console.log(maskedAccountNumber);
console.log(lastFourDigits.padEnd(16, '*'));   //1234************

const message = "Hello, World!";
console.log(message.charAt(7)); // W
console.log(message.charCodeAt(7)); // 87

const data = "Name: John Doe, Age: 30, Country: USA";
const parts = data.split(", ");
console.log(parts); // ["Name: John Doe", "Age: 30", "Country: USA"]

const template = `Dear ${name.trim()},\nWelcome to the JavaScript course!`;
console.log(template);



