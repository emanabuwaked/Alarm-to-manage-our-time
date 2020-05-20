function currentTime(){
		var timeOfToday = new Date();
		var time = timeOfToday.getHours() + ":" + timeOfToday.getMinutes() + ":" + timeOfToday.getSeconds();
		//$("#digitalTime").append ("time");
		$("#digitalTime").textContent = time;
	}

function update (){
	setInterval (currentTime,100)
}

	


