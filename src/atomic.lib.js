var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var red = "#FF0000";
var scalex = 0;
var scaley = 0;
textScroll = 0;
var ResX = canvas.width/1280;
var ResY = canvas.height/720;
var video_length;

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

function drawLine(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function drawImg(id,x,y,alpha,scaleX,scaleY){
	var img = document.getElementById(id);
	ctx.filter = 'brightness(' + brightness + '%)';
	ctx.shadowBlur = 0;
	//ctx.scale(-1, 1);
	if(alpha != null){
		ctx.filter  = 'opacity(' + alpha + '%)';
	}
	if(scaleX != null && scaleY != null){
		ctx.drawImage(img, x, y,scaleX, scaleY);
	}else{
		ctx.drawImage(img, x, y,img.width*ResX,img.height*ResY);
	}
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

var video_frame =0;
function video(){
	video_frame++;
	drawImg("sayonara" + video_frame,0,0,canvas.width,canvas.height);
	if(video_frame == 446){
		clearInterval(video_length);
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