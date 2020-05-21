    var seconds;
	$("#add").click (function(){
		seconds = $("#seconds").val();
		hoursPass ();
		timerdown();
	})

	$("#remove").click (function(){
		$("#seconds").remove(); //reset //empty
		
	})


	var hoursPass= function () {
	var hours = Math.floor(seconds/120);
	var minutes =(seconds%120);
	
	if (seconds >0){
		seconds --;
		

		$("#timerdown").text(hours+ ": "+ minutes) //hours+ ": "+ minutes;
	}else {

		//clearInterval(timerdown) //opposit of setInterval, it will not update
		$("#timerdown").text("Time is up");
	}	
	
	if (hours<12){
		return "0"+hours;
	}else {
		return hours;
	}
	//

	if (minutes<10){
		return "0"+minutes
	}else{
		return minuts;
	}
}
     

     function timerdown() {setInterval (function(){ // update every 500 mili seconds
		hoursPass();
	},500 );}








 
