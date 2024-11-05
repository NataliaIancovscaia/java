/**
 * Objects
 *
 */

// Arrays aren't (that) suited for grouping related data together since they
// are index-based and relies on the order of the values

/*
const fluffles = [
	"Mr. Fluffles",		// 0 = name
	3,					// 1 = age
	"Bengt",			// 2 = owner
	"Annoy people",		// 3 = hobbies
	"Cat",				// 4 = species
];

const captainCat = [
	"Captain Cat",		// 0 = name
	"Cat",				// 1 = species
	9,					// 2 = age
	"Agda",				// 3 = owner
	"HIIT",				// 4 = hobbies
];

const showPetInfo = (pet) => {
	// "NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite hobby is to HOBBY."
	console.log(`${pet[0]} is a ${pet[4]} of ${pet[1]} year(s) old. His owner is ${pet[2]} and his favorite hobby is to ${pet[3]}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
*/

// Objects are better suited for representing data that has an inherent
// connection and is not dependent on the order of the keys
// Object use key/value-pairs

const fluffles = {
	name: "Mr Fluffles",
	age: 3,
	owner: "Bengt",
	hobbies: "Annoy people",
	species: "Cat",
}

const captainCat = {
	name: "Captain Cat",
	species: "Cat",
	age: 9,
	owner: "Agda",
	hobbies: "HIIT",
	owner: "Tiffanny Persson",
	// "favorite-food": "Tuna",
	favoriteFood: "Tuna",
}

/*
// console.log("Fluffles:", fluffles);
console.log("Captain Cat:", captainCat);

// We access a property using dot-notation
console.log("Fluffle's name:", fluffles.name);
console.log("Captain Cat's name:", captainCat.name);
// console.log("Captain Cat's favorite food:", captainCat.favorite-food); // nope

// We can also use square-bracket notation
console.log("Fluffle's name using square-bracket notation:", fluffles["name"]);
console.log("Captain Cats's favorite food:", captainCat["favorite-food"]);
*/

// console.log("Captain Cats's favorite food:", captainCat.favoriteFood);
// console.log("Fluffle's favorite food:", fluffles.favoriteFood);  // will return undefined because fluffles does not have an attribute named `favoriteFood`

const showPetInfo = (pet) => {
	// "NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite hobby is to HOBBY."
	console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner} and his favorite hobby is to ${pet.hobbies}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
