
function calculateOrder() {
	var web = parseInt(document.getElementById("Web").value);
	var php = parseInt(document.getElementById("PHP").value);
	var jquery = parseInt(document.getElementById("JQuery").value);
	
	if (isNaN(web) || isNaN(php) || isNaN(jquery)) {
		alert("Error! You must input a valid set of integers to proceed to the order. Please try again!");
	} else {	
		document.getElementById("details").innerHTML = "<strong>Basic Web Programming (Quantity = " + web + ");</strong> $" + (web*19.99).toFixed(2) + "<br />" +
													"<strong>Intro to PHP (Quantity = " + php + ");</strong> $" + (php*86.00).toFixed(2) + "<br />" + 
													"<strong>Advanced JQuery (Quantity = " + jquery + ");</strong> $" + (jquery*86.00).toFixed(2) + "<br />" +
													"<br/ ><strong>Final total:</strong> $" + ((web*19.99) + (php*86.00) + (jquery*86.00)).toFixed(2);
	}
	return false;
}