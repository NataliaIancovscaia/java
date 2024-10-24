/**
 * Control Flow 👮🏽🎛✋🏻
 */

const minAge = 18;
const maxAge = 65;

let myAge = 25;

/**
 * if statements
 *
 * LOGICAL OPERATORS
 *
 * && = AND (*BOTH* sides have to be true)
 * || = OR (*AT LEAST* one side have to be true)
 */

     // 67 >= 18?         67 <= 65?
	 //   true              false
	 //   true      AND     false
	 //            false
if (myAge >= minAge && myAge <= maxAge) {
	// true
	console.log("Access granted! 🥳");
} else {
	// false
	console.log("🛑 You're either too young or too old to party! 👶🏻👴🏻");
}

let username = "johan";
//   "johan" === "dave"     "johan" === "johan"
//        false         OR         true
//                     true
if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

// More advanced if-statement
if (myAge >= minAge && myAge <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (myAge < minAge) {
	console.log("Too young! 👶🏻");
} else {
	console.log("Too old for this shit! 👴🏻");
}

console.log("Program ended.");
