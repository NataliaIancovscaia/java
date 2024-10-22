/*
// Detta är en radkommentar
console.log("Hello from script.js");  // Detta visar ett meddelande i konsolen

Detta är en block-kommentar
alert("I NEED A BREAK");  // Detta visar en popup i webbläsaren

console.log("Hello after alert");
*/

/*
let msg = "hi mom";
console.log(msg);    // console.log("abc");

msg = "hi dad";
console.log(msg);    // console.log("def");

let haxx0r;
console.log(haxx0r);
haxx0r = "i am haxx0r, very elite";
console.log(haxx0r);
*/

/*
// Naming Conventions

// camelCase
let myFirstName = "Johan";

// snake_case
let my_first_name = "Johan";

// UpperCamelCase / PascalCase
let MyFirstName = "Johan";

// Kebab Case / BBQ Case
*/

let firstName = "Johan";
console.log(firstName);

firstName = "Pelle";
console.log(firstName);

const lastName = "Nordström";
console.log(lastName);

// lastName = "Hackerson";  // NOPE!

// String Concatenation
console.log(firstName + " " + lastName); // "Pelle Nordström"
console.log("Pelle" + " " + "Nordström"); // "Pelle Nordström"

let fullName = firstName + " " + lastName;  // "Pelle Nordström"
console.log("Your name is: " + fullName);

firstName = "Bengt";
console.log("Your name is: " + fullName);
