function currentTime(){
	
		var timeOfToday = new Date();
		var time = timeOfToday.getHours() + ":" + timeOfToday.getMinutes() + ":" + timeOfToday.getSeconds();
		//$("#digitalTime").append ("time");
		document.getElementById("digitalTime").innerHTML = time;
	}
currentTime();


function update (){
	setInterval (currentTime,100)
}

update ();


