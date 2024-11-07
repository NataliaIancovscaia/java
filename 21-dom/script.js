/**
 * DOM - Document Object Model
 *
 */

/*
const firstLink = document.querySelector("#link-1");

// Get the element's parent
const firstLinkParent = firstLink.parentElement;

// Get the parent's next sibling
const firstLinkParentNextSibling = firstLinkParent.nextElementSibling;

// Get the first paragraph on the page
const firstParagraph = document.querySelector("p");

// Log the first paragraphs HTML
console.log(firstParagraph.innerHTML);

// Log the first paragraphs text
console.log(firstParagraph.innerText);

// Get the first paragraph with 'error'-class on the page
const firstErrorParagraph = document.querySelector("p.error");

// Log the first error-paragraphs HTML
console.log(firstErrorParagraph.innerHTML);

// Log the first error-paragraphs text
console.log(firstErrorParagraph.innerText);

// We can also change the content of an element
firstParagraph.innerText = "Look mom, my first paragraph!";
firstParagraph.innerText += " Oh I forgot this!";
*/

const alertEl = document.querySelector(".alert");
console.log("alertEl:", alertEl);

console.log("alertEl innerHTML:", alertEl.innerHTML);
console.log("alertEl innerText:", alertEl.innerText);
console.log("alertEl textContent:", alertEl.textContent);

// Change content
alertEl.innerText = "Such error, much danger, very fail";
alertEl.innerText = "Such <strong>error</strong>, much danger, very fail";
alertEl.innerHTML = "Such <strong>error</strong>, much danger, very fail";

/**
 * Say hi to the user
 */
const h2El = document.querySelector("h2#greetings");
const username = prompt("What are thy name?");
// console.log("Hello", username);
// h2El.innerHTML = "Hello " + username;  // BIG NO-NO!
h2El.innerText = "Hello " + username;  // yasss! <3
