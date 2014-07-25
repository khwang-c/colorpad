var containerWidth = 960;

function createGrid(size){
	//set up grid
		var boxsize = (containerWidth - (4*size))/size;

		for(var r = 0; r < size; r++){
			for(var j = 0; j < size; j++){
				//$('#container').append("<div class=\"row"+r+"\"></div>");
				$('#container').append("<div class=\"cell\"></div>");
			}
			$('#container').append("</br>");	
		}
		$('.cell').addClass("cell").height(boxsize).width(boxsize);
};


//main
$(document).ready(function(){

		createGrid(16);

		

		$('#clear').click(function(){
			$('.cell').css("background-color","#BABFBC");
		});

		$('#reset').click(function(){
			
			var size = prompt("Please choose a size between 1 and 50.");

			while(size < 1 || size > 50){
				size = prompt("Invalid Size. Please choose a size between 1 and 50.");
			}

			$('#container').empty(); //empty removes all child nodes in the set of matched elements
			createGrid(size);
			//events();
		});

		$('mode').click(function(){

		});

		$('#container').on("mouseenter", ".cell" ,function(){
			$(this).css("background-color","#4ab579");
		}); //delegate binds event handlers to elements for current AND future elements in the DOM. 
		//but it is superceded by .on method. .on does not work with event handler hover
		
		//hover will not work after grid has been reset because hover uses bind which binds event handlers
		//to only current elements in the DOM.
		/*
		$('.cell').hover(function(){ 
				$(this).css("background-color","#4ab579");
		,
			function(){
				$(this).css("background-color","#BABFBC");
			}
		});*/


});