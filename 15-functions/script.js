/**
 * Functions
 *
 */

/**
 * Function Declaration
 */

/*
function sayHello() {
	alert("Hello from a function!");
	console.log("Hello from a function!");
}

sayHello();
sayHello();
*/

/*
function greetUser(username, time = "day") {
	console.log(`Good ${time}, ${username}!`);
}

greetUser("FED24M", "morning");   // "Good morning, FED24M!"
greetUser("Johan!");              // "Good day, Johan!!"
greetUser();                      // "Good day, undefined!"

let userJohan = "Johan";
let timeOfDay = "haxxing";
greetUser(userJohan, timeOfDay);
*/

/**
 * Function Expression
 */

/*
console.log("I am before creating function");

const greetUser = function(username, time = "day") {
	console.log(`Good ${time}, ${username}!`);
}

greetUser("Johan");
greetUser("Pelle", "night");

console.log("I am after creating function");
*/

let username = "Johan";

const sayHi = function(username) {
	username = username.toUpperCase();
	console.log(`Hi ${username}`);
}

sayHi(username);   // sayHi("Johan")

console.log("username after invoking function:", username);
