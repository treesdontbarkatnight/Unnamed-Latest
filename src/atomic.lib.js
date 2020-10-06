var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var red = "#FF0000";
var scalex = 0;
var scaley = 0;
textScroll = 0;

function drawRect(x,y,w,h,c){
  	if (canvas.getContext) {
		ctx.fillStyle = c;
		ctx.fillRect(x, y, w, h);
	}
}

function background(c){
	w = canvas.width;
	h = canvas.height;
  	if (canvas.getContext) {
		ctx.fillStyle = c;
		ctx.fillRect(0, 0, w, h);
	}
}

function drawImg(id,x,y,alpha,scalex,scaley){
	var img = document.getElementById(id);
	ctx.filter = 'brightness(' + brightness + '%)';
	ctx.shadowBlur = 0;
	//ctx.scale(-1, 1);
	if(alpha != null){
		ctx.filter  = 'opacity(' + alpha + '%)';
	}
	ctx.drawImage(img, x, y);
}

function audio(audioID,audioEvent){
	var aud = document.getElementById(audioID);
	if(audioEvent == "play"){
		document.getElementById(audioID).style.visibility = "visible";
		aud.muted = false;
		aud.play();
	}else if(audioEvent == "stop"){
		document.getElementById(audioID).style.display = "none";
		aud.muted = true;
		aud.pause();
		aud.currentTime = 0;
	}
}

function drawText(text,x,y,size,shadowColor,shadowBlur,fc){
	ctx.font = size + ' serif';
	ctx.shadowColor = shadowColor;
	ctx.shadowBlur = shadowBlur;
	ctx.lineWidth = 100;
	ctx.fillText(text,x,y);
	if(fc != null){
		ctx.fillStyle = fc;
	}else{
		if(poemText == true){
			ctx.fillStyle = "#000000";
		}else{
			ctx.fillStyle = "#ffffff";
		}
		
	}
}