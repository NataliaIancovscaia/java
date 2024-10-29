/**
 * Loops 🎡
 *
 */

/**
 * for-loop
 */
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
