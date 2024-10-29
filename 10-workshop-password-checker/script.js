/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Börja med att lösa den i omvänd ordning, dvs få först kollen att lösenordet
 * har minst 16 tecken att fungera.
 *
 * Utöka därefter koden till att kolla om lösenordet har minst 12 tecken OCH
 * minst 1 bindestreck.
 *
 * Osv.
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
password = "password"; // inte giltigt, 8 tecken
// password = "pa$sword"; // giltigt, 8 tecken
// password = "p@ssw%rd"; // giltigt, 8 tecken
// password = "pa$$word"; // giltigt, 8 tecken
// password = "secretpassword"; // inte giltigt, 14 tecken
// password = "secret-password"; // giltigt, 15 tecken
password = "such-password-much-secure-very-long"; // giltigt, 35 tecken

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

console.log(`🕵🏻 Checking password '${password}'`);

// Har lösenordet minst 16 tecken?
if (password.length >= 16) {
	// Ja!
	console.log("- ✅ Great! That's a long password!");
} else {
	// Nej!
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}
