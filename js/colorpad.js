


//main
$(document).ready(
	function(){


		//set up grid
		for(var r = 1; r < 17; r++){
			for(var j = 1; j < 17; j++){
				//$('#container').append("<div class=\"row"+r+"\"></div>");
				$('#container').append("<div class=\"cell\"></div>");
			}
			$('#container').append("</br>");
			
		}

		$('.cell').hover(
			function(){
				$(this).css("background-color","#4ab579");
		},
			function(){
				$(this).css("background-color","#BABFBC");
			}
		);


});