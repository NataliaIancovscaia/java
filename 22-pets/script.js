/**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet enligt nedan. Ersätt det som står med
 * stora bokstäver med rätt sak för varje `pet`.
 *
 * Koden ni skriver ska fungera *oavsett* hur många (eller få) husdjur som
 * finns i array:en `pets`! Ni kan testa detta genom att ta bort kommenteringen
 * av det sista husdjuret i array:en.
 *
 * 👶🏻 STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * 😊 STEG 2
 * NAME is a SPECIES of AGE year(s) old. His favorite
 * hobbies is to HOBBIES.
 *
 * 🤓 STEG 3 (skriv endast ut owner om det finns någon)
 * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
 * hobbies is to HOBBIES.
 *
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	// {
	// 	hobbies: ["Be cute"],
	// 	species: "Old kitten",
	// 	age: 9,
	// 	name: "Meow Sr",
	// 	sound: "meooow!",
	// 	meowCounter: 0,
	// 	speak() { // same as writing "speak: function() {}"
	// 		this.meowCounter++;
	// 		console.log(this.sound);
	// 		console.log(`Meowed times today: ${this.meowCounter}`);
	// 	}
	// }
];






const ul=document.getElementById(`petslist`);
for (let i=0;i<pets.length;i++){
let pet=pets[i];
info =`${pet.name}  is a ${pet.species} of ${pet.age} year(s) old.`;
if (pet.hobbies && pet.hobbies.length > 0) {
		info += ` His favorite hobbies is to ${pet.hobbies.join(', ')}.`;
	}
if (pet.owner) {
		info += ` His owner is ${pet.owner.name} and his favorite hobbies is to ${pet.hobbies.join(', ')}.`;
}
const li=document.createElement(`li`);
li.textContent = info;


ul.appendChild(li);}


/*const ul = document.getElementById('petslist');
pets.forEach(pet => {

	const li = document.createElement('li');

	let info = `${pet.name} is a ${pet.species} of ${pet.age} year(s) old.`;

	if (pet.hobbies && pet.hobbies.length > 0) {
		info += ` His favorite hobbies is to ${pet.hobbies.join(', ')}.`;
	}
	if (pet.owner) {
		info += ` His owner is ${pet.owner.name} and his favorite hobbies is to ${pet.hobbies.join(', ')}.`;
	}
	li.textContent = info;

	ul.appendChild(li);
});*/
