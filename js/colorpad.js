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
			$('.cell').css({"background-color":"#BABFBC",
							"opacity":"1"});
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

		$('#modeB').click(function(){
			$('form').toggle();
		});

		$('#container').on("mouseenter", ".cell" ,function(){
						$(this).css("background-color","#4ab579");
		});


		$('#modes input').on("change", function(){
			var mode = $('input[name=mode]:checked', '#modes').val();//retrieves value of checked radio button
			$('#container').off();
			$('.cell').off();
			switch(mode){
				case "default":	
					//DEFAULT
					$('#container').on("mouseenter", ".cell" ,function(){
						$(this).css("background-color","#4ab579");
					});
					break;
				case "random":
					//RANDOM
					$('#container').on("mouseenter", ".cell" ,function(){
					//var rand = Math.floor(Math.random() * 256);
						$(this).css("background-color","rgb("+Math.floor(Math.random() * 256)+","+
							Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")");
					});
					break;
				case "cursor":
					$('.cell').on({
						mouseenter: function(){
							$(this).css("background-color","#4ab579");
						},

						mouseleave: function(){
							$(this).css("background-color","#BABFBC");
						}

					 });
					 break;

				case "trail":
					$('.cell').on({
						mouseenter: function(){
							$(this).css("opacity","0");
							//$(this).css({"background-color": "#BABFBC", "opacity": "0"});
						},

						mouseleave: function(){
							$(this).css("background-color", "#BABFBC");
							$(this).fadeTo('fast',1);
						}

					 });

					 break;	 

				case "shade":
					$('#container').on("mouseenter", ".cell" ,function(){
						$(this).css("background-color","#4ab579");
					});
					$('#container').on("mouseenter", ".cell" ,function(){
						var opacity = $(this).css("opacity");
						
						var decrease = opacity - 0.1;
						
						if(opacity > 0.1){ //had to do 0.1 instead of 0 because of weird browser subtracting values
							$(this).css("opacity", decrease);
						}
						else{
							$(this).css("opacity", 0);
						}
					});	
					
					break;
			}

		});//END MODE
});

//Notes

	 //delegate binds event handlers to elements for current AND future elements in the DOM. 
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