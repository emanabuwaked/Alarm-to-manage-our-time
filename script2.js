function currentTime(){
	
		var timeOfToday = new Date();
		var time = timeOfToday.getHours() + ":" + timeOfToday.getMinutes() + ":" + timeOfToday.getSeconds();

		// if  (timeOfToday.getHours()<10){
		// 	return "0"+timeOfToday.getHours()
		// }

		// if  (timeOfToday.getMinutes()<10){
		// 	return "0"+timeOfToday.getMinutes()
		// }
		
		// if  (timeOfToday.getSeconds();<10){
		// 	return "0"+timeOfToday.getSeconds();
		// }

		//$("#digitalTime").append ("time");
		document.getElementById("digitalTime").innerHTML = time;
	}
currentTime();


function update (){
	setInterval (currentTime,100)
}

update ();


