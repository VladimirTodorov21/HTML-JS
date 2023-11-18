const arrayOfNumbers = [100,18,28,38,22,56,76,41];

const mixedArray = [7,10,"2.0cars",true,"cities3"];

var stringDigits = "3hi1Iam54John21And90IlovePr0gr4m1ng";

var reverseStr = "Gina Cody School of Engineering";

function addNumbers(arrayOfNumbers) {
	let total = 0;
	for (let i=0; i<arrayOfNumbers.length; i++) {
		total += arrayOfNumbers[i]
	}
	document.write("The sum of all the numbers in the array is: " + total);
}

function findMaxNumber() {
	let maximum = 0;
	for (let j=0; j<arrayOfNumbers.length; j++) {
		if (maximum <= arrayOfNumbers[j]) {
			maximum = arrayOfNumbers[j]
		}
	}
	document.write("The largest number of the array is: " + maximum);
}

function addOnlyNumbers(mixedArray) {
	let total = 0;
	let n = 0;
	for (let k=0; k<mixedArray.length; k++) {
		n = parseFloat(mixedArray[k]);
		
		if (!isNaN(n)) {
			total += parseFloat(mixedArray[k]);
		}
	}
	document.write("The total result of the numbers found in mixed array is: " + total);
}

function getDigits(stringDigits) {
	let str = "";
	for (let l=0; l<stringDigits.length; l++) {
		if (!isNaN(stringDigits.charAt(l))) {
			str += "" + stringDigits.charAt(l);
		}
	}
	document.write("The numbers found from the string are displayed in the following order: " + str);
}

function reverseString(reverseStr) {
	let revStr = "";
	for (let m = reverseStr.length-1; m>=0; m--) {
		revStr += reverseStr.charAt(m);
	}
	document.write("The reverse string written backwards is: " + revStr);
}

function getCurrentDate() {
	var date = new Date();
	var day = date.toLocaleString('default', { weekday: 'long'});
	var month = date.toLocaleString('default', { month: 'short'});
	var current_date = day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
	document.write("The current date is: " + current_date);
}
