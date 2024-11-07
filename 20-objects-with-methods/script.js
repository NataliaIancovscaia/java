/**
 * Objects (with methods!)
 *
 */

// Objects can also contain complex (reference) data types
const barksby = {
	name: "Mr Barksby",
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Eating lots of treats", "Car-chasing"],
	sound: "WOOOFF!",
	owner: {
		name: "Mr Beans",
		age: 57,
	},
	speak: function() {
		console.log(`${this.name} says: ${this.sound}`);
	},
	info: function() {
		console.log("barksby this:", this); // barksby-object
	},
}

const meowJr = {
	hobbies: ["Be cute", "Sleeping"],
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meoww",
	meowCounter: 0,
	speak: function() {
		console.log(`${this.name} says: ${this.sound}`);
		this.meowCounter++;
		console.log(`Meowed times today: ${this.meowCounter}`);
	},
	info: () => {  // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
		console.log("meow jr this:", this); // Window
	},
}

/*
barksby.speak();
meowJr.speak();
meowJr.speak();
meowJr.speak();
*/

// console.log("global this:", this);


/**
 * Primitive datatypes vs reference datatypes
 */

//
// Primitive datatypes are copied by **value**
//
let name1 = "Johan";
let name2 = name1;  // name2 = "Johan"

name1 = "Pelle";

console.log("name1:", name1);  // "Pelle"
console.log("name2:", name2);  // "Johan"

//
// Complex datatypes (arrays + objects) are copied by **reference**
//

const littleBarksby = barksby;

// Let's change the name of `littleBarksby`
littleBarksby.name = "Barksby Jr";

// Since `barksby` is just an "alias" (reference) to an object, we've only copied the **reference** and _not the actual object_. Hence both variables are references to the **same** object
console.log("Barksby name:", barksby.name);  // "Barksby Jr"
console.log("Little Barksby name:", littleBarksby.name);  // "Barksby Jr"

// Arrays are also copied by reference
const names = ["Johan", "Pelle"];
const friends = names;

friends.push("Agda");
console.log("names:", names);
console.log("friends:", friends);
console.log("is `names` and `friends` the same object?", names === friends);  // true
