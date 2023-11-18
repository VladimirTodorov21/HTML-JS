function displayTime() {
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();
	var weekday = date.toLocaleString('default',{weekday: 'long'});
	var day = date.getDate();
	var month = date.toLocaleString('default',{month: 'short'});
	var year = date.getFullYear();
	
	var current_time1 = weekday + ", " + month + ", " + day + ", " + year;
	var current_time2 = hours + ":" + minutes + ":" + minutes;
	
	document.write(current_time1 + "<br />" + current time2);
}
