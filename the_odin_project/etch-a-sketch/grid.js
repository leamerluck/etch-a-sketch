$(document).ready(function() {
    
    grids(16);
    standard();
    
    //resets the grid to standard
    $(".standard").on("click", function() {
        
       userPref(); 
       grids(numWidth); 
       standard();
    });  
    
    $(".random").on("click", function() {
        
       userPref(); 
       grids(numWidth); 
       random();
         
});
    
    $(".opacity").on("click", function() {
        
       userPref(); 
       grids(numWidth); 
       opacity();
         
});
    
    $(".trail").on("click", function() {
        
       userPref(); 
       grids(numWidth); 
       trail();
         
});


function grids(numWidth) {
    
    $('#grid').html("");
    
	    var sqSize = 960/numWidth;
    
        for (var i = 0; i < numWidth; i++) {
			for(var j = 1; j <= numWidth; j++) {
				 $('#grid').append('<div class="squares"></div>');	
			}
            //creates grid
			$('#grid').append('<div class="squares"></div');
	    }		
	        $('.squares').css("width",sqSize);  //width of each square
			$('.squares').css("height",sqSize); //height of each square 
    
$(".squares").css("background-color","blue");       
}

function standard() {   
    $('.squares').mouseenter(function(){
            $(this).css("background-color","yellow");
    });
}        
        
function userPref() {
    numWidth = prompt("How many squares wide would you like your      digital etch-a-sketch? Enter a number from 1-100");
        
        //checks for relevant entry
        if(numWidth >=1 && numWidth<=100) {
            return numWidth;
        }
        else {
		    alert('Please enter a valid number.');
        }
}
    
function random() {
    function rgbColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rand = 'rgb('+r+', '+b+', '+g+')';  
        return rand;
    }
    
    $('.squares').mouseenter(function(){
            $(this).css("background-color",rgbColor());
    });
    
}
    
function opacity() {
    $(".squares").on("mouseenter", function(){
				var opacity = $(this).css("opacity");
				if (opacity > 0.1) {
					$(this).css("opacity", opacity - 0.1);
				}else{
					$(this).css("opacity", 0);
				}
			});
}
    
function trail() {
    $(".squares").hover(function(){
        $(this).css("opacity", 0);
    }, function(){
        $(this).fadeTo("slow", 1);
        });  
}
});
