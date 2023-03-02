
function finishExplotationVulnerability() {
	let active = document.getElementById("active");
	let poc = document.getElementById("poc");
	let none = document.getElementById("none");
	let inTheWild = document.getElementById("inTheWild");

	if (active.value != "0" || poc.value != "0") {
		if (inTheWild.value == "1") {
			// Exemplo...
			showCard("card2");
		} else {
			// @@@ falta...
		}
	} else {
		if (inTheWild.value == "1") {
			// @@@ falta...
		} else {
			// @@@ falta...
		}
	}
}
