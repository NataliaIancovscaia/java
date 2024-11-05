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
		console.log(`Hello this is ${this.name}, I am ${this.age} year(s) old`);
	},
	info: function() {
		console.log("barksby this:", this); // barksby-object
	},
}

const chairCatMeow = {
	hobbies: ["Be cute", "Sleeping"],
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meoww",
	speak: function() {
		console.log(`Hello this is ${this.name}, I am ${this.age} year(s) old`);
	},
	info: () => {
		console.log("meow jr this:", this); // Window
	},
}

barksby.speak();
chairCatMeow.speak();

// console.log("global this:", this);
