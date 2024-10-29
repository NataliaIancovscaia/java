/**
 * Loops 🎡
 *
 */

/**
 * for-loop
 */
/*
let sum = 0;
let points = [1, 5, -50, 10, 20, 8, 3, -5];
for (let i = 0; i < points.length; i++) {
	console.log(`At index ${i}, number is:`, points[i]);

	// Ignore negativity and continue the loop at the next iteration
	if (points[i] <= 0) {
		console.log("Got some negativity, ain't nobody got time for that");
		continue;
	}

	// Add number to sum
	sum += points[i];
	console.log("The new sum is:", sum);

	// If sum is 30 or higher, we've passed the test
	if (sum >= 30) {
		console.log("🥳 You've passed the test! Yayyyyy! Stopping further counting ☺️");
		break;
	}
}
console.log("Loop is done, sum is:", sum);
*/

/*
let i;
for (
	let i = 0;  // startvärde
	i < 5;  // ska vi fortsätta loopa?
	i++     // gör detta efter varje iteration
) {
	// do stuff
	console.log(i, "🐑");
}
console.log("Sheeeep:", i);  // undefined, because for-loop only changes it's local variable `i`
*/

/**
 * while-loop
 * runs 0 or more times
 */
/*
let i = 0;
while (i < 0) {
	// do this
	console.log("in while-loop, i is:", i);

	if (i >= 3) {
		break;
	}

	// increase i by 1
	i++;
}
console.log("Finished looping, i is:", i);
*/

/**
 * do while-loop
 * runs *at least* one time
 */
let i = 0;
do {
	// do stuff
	console.log("in do while-loop, i is:", i);

	// increase i by 1
	i++;
} while (i < 0);
console.log("Finished looping, i is:", i);
