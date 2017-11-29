$(document).ready(function(){

	$(document).mousemove(function(event){

		$("#light").css({"top": event.pageY - 225, "left": event.pageX -225});


	});


});