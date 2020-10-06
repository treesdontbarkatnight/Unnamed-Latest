function animations(){

	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 32){
			document.getElementById("player").setAttribute("src" ,"gfx/player/back.png");
		drawImg("player",0,0);	
		}
	});
}