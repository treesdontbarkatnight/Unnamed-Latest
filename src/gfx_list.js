var gfxList = [0,10,2,3,"hi"];

for(var i=0;i<gfxList.length;i++){
	var b = "gfx\\" + gfxList[i] + ".png"
	var x = document.createElement("IMG");
	x.setAttribute("src",b);
	x.setAttribute("id",gfxList[i]);
	x.setAttribute("style","display:none");
	document.body.appendChild(x);
}