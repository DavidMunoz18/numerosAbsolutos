/**
 * 
 */

function num() {

	let num1 = prompt("Introduzca un numero: ");

	if (num1 < 0) {

		num1 = num1 * -1;


	}
	document.getElementById("numabs").innerHTML = num1;
	}
