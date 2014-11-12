
document.addEventListener("DOMContentLoaded", init);

function init(){
	//startup script
    $('.btn').mouseover(function(){
        $(this).removeClass("inactive");
        $(this).addClass("active");
    });
    $('.btn').mouseout(function(){
        $(this).removeClass("active");
        $(this).addClass("inactive");
    });
     $('#btnReset').click(function(){
        alert("Values have been reset! :)");
    });
    

}

