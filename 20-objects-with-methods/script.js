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

barksby.speak();
meowJr.speak();
meowJr.speak();
meowJr.speak();

// console.log("global this:", this);
