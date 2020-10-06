var bg_x = 0;
var bg_y = 0;
var bg2_x = 436;
var menu_setup = 1;
var poemText = false;
//Poem Game Variables
var mPoem = "m_sticker_1";
var nPoem = "n_sticker_1";
var yPoem = "y_sticker_1";
var sPoem = "s_sticker_1";
//Animation Variables
var m_stickerX = 10;
var n_stickerX = 55;
var y_stickerX = 100;
var s_stickerX = 145;
var logo_y = -100;
var girls_y = 600;
var girls2_y = 600;
var sidebar_x = -500;
var x;
var yt;
var splash = 0;
var brightness = 1000;
var can = document.getElementById("mycanvas");
menu_option = 1;
var alpha = 0;
var next = 0;
var isDead = 0;
var alternateImg = 0;
var poemSelect = 0;
var poemGame = false;
var poemLine = 0;
var charName = "MC";
var scripts =    ["HeLlO hoW ArE Yu"
				,"Heeeeeeeeeyyy!"
				,"I see an anoying girl running towards me in  the distance. It look like she's trying to"
				,"signal to me by waving her arms wildly in the air."
				,"That girl is my next door neighbor Sayori.   We've known each other since we were little."
				,"We use to walk to school together a lot, but starting around high school she began to "
				,"sleep in more and more frequently and I got  tired of waiting."
				,"I usually don't, but today I've decided to   wait for her to catch up."
				,"Ah! I over slept again!"
				,"Hello Sayori." //10
				,"Hi " + charName + "!"
				,"Thanks for waiting for me to catch up " + charName + "."
				,"It's no problem Sayori. Let's get going."
				,"We both turn and begin to walk towards the   school."
				,"Oh hey " + charName + " I almost forgot have you found a   club to join yet?"
				,"A club? I've told you before that I'm not    really intrested in joining any clubs."
				,"Aw come on it would be good for you to get   out and socialize more before college."
				,"And who know maybe you'll even find a new    hobby you'll enjoy besides watching anime."
				,"Hey no need to call me out like that."
				,"Hehe~ your right sorry..." //20
				,"Before the end of the day though I want you  to have found a club to join ok?"
				,"Fine Sayori. I'll see if I can find one to   join."
				,"Welp I've go to go to class now see you later Sayori."
				,"Bye " + charName + "!"
				,"(Ugh... How do I let her talk me into these  things...guess I'll look around for some"
				,"intresting clubs to join today.)"
				," "
				,"The school day is ordinary as ever, and it's over before I even know it."
				,"After a pack up my things, I stare blankly at the wall, looking for an ounce of motivation."
				,"I'm about to get up and leave when Sayori     enters the room and aproaches my desk." //30
				,"Hi again " + charName + "!"
				,"Hey Sayori."
				,"Hey " + charName + " have you thought about any clubs      you would like to join yet?"
				,"(Oh no I told Sayori that I would have chosen a Club by the end of the day..."
				,", but I am really not intrested in joining   any clubs.)"
				,"Well there just aren't any clubs that I'm    intrested in right now."
				,"I thought you would say that so you know..."
				,"Know what?"
				,"Well that, you could come join me at my club!"
				,"Sayori...there is no way I'm going to your   club. "
				,"Ehhh!?!? Meanie!"
				,"(Sayori is Vice president of the Literature  club, but I don't think she's even intrested"
				,"in literature and I'm definatly not. In fact I'm 99% sure Sayori only did it because"
				,"she thought it would be fun to start a new   club.)"
				,"I don't know Sayori..."
				,"Well...I kinda told everyone I would bring in a new member today and Natsuki made"
				,"cupcakes and everything..."
				,"Well don't make promises that you cant keep!"
				,"(Sayori looks at me with her pleading eyes   and I let out a brief sigh.)" //40
				,"Fine Sayori I'll stop by, but only for a      cupcake."
				,"Yes! Let's go!"
				,"And thus marks the day that I sold my soul   for a  cupcake."
				,"I dejectedly follow Sayori over to a part of the school I rarely visit."
				,"Full of energy, Sayori swings open the       classroom door."
				," "
				," "
				," "
				," "
				,"I go up to Sayori's room and knock on her    door.) Wake up Sayori. (No response.)"
				,"(I knock on the door.) Wake up you dummy!    (There's  still no response.)"
				,"(I gently open the door...)"];
var charSpeaking = ["Monika?"
					,"???"
					," "
					," "
					," "
					," "
					," "
					," "
					,"Sayori"
					,charName
					,"Sayori"
					,"Sayori"
					,charName
					," "
					,"Sayori"
					,charName
					,"Sayori"
					,"Sayori"
					,charName
					,"Sayori"
					,"Sayori"
					,charName
					,charName
					,"Sayori"
					," "
					," "
					," "
					,charName
					,charName
					,charName
					,"Sayori"];
var black_x = 600;
var scene1 = false;
var dialog = "";
var dialog2 = "";
var n_stickerJump = 0;
var y_stickerJump = 0;
var s_stickerJump = 0;
var m_stickerJump = 0;
var n_stickerY = 325;
var y_stickerY = 325;
var m_stickerY = 325;
var s_stickerY = 325;
var poemPage = 0;
var noise = 1;

function ddlc_start(){
	//canvas.addEventListener("mousemove", getMousePos,false);
	//canvas.addEventListener("mouseenter", mouseUpdate, false);
	//canvas.addEventListener("mouseleave", mouseUpdate, false);
	document.getElementById("mycanvas").style.display = "inline";
	document.getElementById("fullscreen").style.display = "inline";
	document.getElementById("ddlc_start").style.display = "none";
	document.body.setAttribute("style","background-image: url('images/bg/background.png')");
	document.title = "Doki Doki Literature Club";
	audio("1","play");
	if(x != null){
		clearInterval(x);
		
		x = setInterval(drawBar,1);
	}else{
		x = setInterval(drawSplash,1);
	}
}

function mouseUpdate(e){
	mos_X = e.pageX;
	console.log(mos_X);
}

function getMousePos(canvas, evt) {
    var rectmos = can.getBoundingClientRect();
    return {
      x: evt.clientX - rectmos.left,
      y: evt.clientY - rectmos.top
    };
}

function keyPressed(event){
	if(event.keyCode == 32){
		if(menu_option == 1){
			menu_option = 0;
			audio("select","play");
			next++;
		}else if(menu_option == 2){
			audio("select","play");
		}else if(scene1 == true){
			next++;
			textScroll = 0;
			dialog = "";
			dialog2 = "";
		}else if(poemGame == true){
			if(n_stickerJump == 0 && s_stickerJump == 0 && m_stickerJump == 0 && y_stickerJump == 0){
				audio("select","play");
				if(poemSelect == 0){
					n_stickerJump = 1;
				}else if(poemSelect == 1){
					s_stickerJump = 1;
				}else if(poemSelect == 2){
					y_stickerJump = 1;
				}else if(poemSelect == 3){
					m_stickerJump = 1;
				}
			poemPage++;
			}
		}
	}
	if(event.keyCode == 87 || event.keyCode == 38){
		if(menu_option == 2){
			menu_option = 1;
			audio("hover","play");
		}else if(poemGame == true){
			if(poemSelect > 0){
				audio("hover","play");
				poemSelect--;
			}
		}
	}
	if(event.keyCode == 83 || event.keyCode == 40){
		if(menu_option == 1){
			menu_option = 2;
			audio("hover","play");
		}else if(poemGame == true){
			if(poemSelect < 9){
				audio("hover","play");
				poemSelect++;
			}
		}
	}
}

function drawSplash(){
	drawImg("splash",0,0);
		if(splash < 1000){
			brightness -= 5;
		}
	splash++;
	if(splash >= 180){
		if(brightness < 1000){
			brightness += 5;
			console.log("b: " + brightness);
		}else{
			clearInterval(x);
			brightness = 100;
			x = setInterval(drawBar,1);
			//yt = setInterval(drawMenu,50);
		}
	}
}

function drawBar(){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	drawImg("main_menu",sidebar_x,0);
	sidebar_x += 1;
	if(sidebar_x >= 0){
		clearInterval(x);
		x = setInterval(drawLogo,1);
	}
}

function drawLogo(){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	drawImg("main_menu",sidebar_x,0);
	drawImg("logo",80,logo_y);
	logo_y += 1;
	if(logo_y >= -5){
		clearInterval(x);
		x = setInterval(drawGirls,1);
	}
}

function drawGirls(){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	drawImg("menu_art_y",200,girls_y);
	if(isDead == 1){
		drawImg("menu_art_s_break",180,girls2_y);
	}else{
		drawImg("menu_art_s",180,girls2_y);
	}
	drawImg("menu_art_n",285,girls_y);
	drawImg("menu_art_m",340,girls2_y);
	drawImg("main_menu",sidebar_x,0);
	drawImg("logo",80,logo_y);
	girls_y -= 1;
	girls2_y -= .9;
	if(girls_y <= 60 && girls2_y <= 130){
		menu_setup = 0;
		clearInterval(x);
		x = setInterval(drawMenu,1);
	}
}

function drawMenu(){
	document.addEventListener('keydown', keyPressed, false);
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	drawImg("main_menu",sidebar_x,0);
	if(menu_option == 1){
		drawImg("play_blue",20,150);
		drawImg("settings",20,220);
	}else if(menu_option == 2){
		drawImg("play",20,150);
		drawImg("settings_blue",20,220);
	}else{
		drawImg("play",20,150);
		drawImg("settings",20,220);
	}
	drawImg("logo",80,-5);
	drawImg("menu_art_y",200,girls_y);
	if(isDead == 1){
		drawImg("menu_art_s_break",180,girls2_y);
	}else{
		drawImg("menu_art_s",180,girls2_y);
	}
	drawImg("menu_art_n",285,girls_y);
	drawImg("menu_art_m",340,girls2_y);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	if(next == 1){
		black_x -= 2;
		drawRect(black_x,0,500,400,"#000000");
		if(black_x == 0 || black_x < 0){
			audio("1","stop");
			audio("2","play");
			drawImg("residential",0,0);
			drawRect(black_x,0,500,400,"#000000");
		}
		if(black_x < -600){
			black_x = 600;
			clearInterval(x);
			x = setInterval(drawScene1,1);
		}
	}
}

function drawSayori(x,y,emotion,alpha){
	if(alpha != null){
		if(emotion == "happy"){
			drawImg("sayori_1l",x,y,alpha);
		drawImg("sayori_1r",x,y,alpha);
			drawImg("sayori_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			drawImg("sayori_1l",x,y,alpha);
		drawImg("sayori_1r",x,y,alpha);
			drawImg("sayori_i",x,y+1,alpha);
		}else if(emotion == "frustrated"){
			drawImg("sayori_2l",x,y,alpha);
		drawImg("sayori_2r",x,y,alpha);
			drawImg("sayori_p",x,y+1,alpha);
		}
	}else{
		if(emotion == "happy"){
			drawImg("sayori_1l",x,y,alpha);
		drawImg("sayori_1r",x,y,alpha);
			drawImg("sayori_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			drawImg("sayori_1l",x,y,alpha);
		drawImg("sayori_1r",x,y,alpha);
			drawImg("sayori_i",x,y+1,alpha);
		}else if(emotion == "frustrated"){
			drawImg("sayori_2l",x,y,alpha);
		drawImg("sayori_2r",x,y,alpha);
			drawImg("sayori_p",x,y+1,alpha);
		}
	}
}

function drawNatsuki(x,y,emotion,alpha){
	if(alpha != null){
		drawImg("natsuki_1l",x,y,alpha);
		drawImg("natsuki_1r",x,y,alpha);
		if(emotion == "happy"){
			drawImg("natsuki_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			//drawImg("natsuki_i",x,y+1,alpha);
		}
	}else{
		drawImg("natsuki_1l",x,y);
		drawImg("natsuki_1r",x,y);
		if(emotion == "happy"){
			drawImg("natsuki_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			//drawImg("natsuki_i",x,y+1,alpha);
		}
	}
}

function drawYuri(x,y,emotion,alpha){
	if(alpha != null){
		drawImg("yuri_1l",x,y,alpha);
		drawImg("yuri_1r",x,y,alpha);
		if(emotion == "happy"){
			drawImg("yuri_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			//drawImg("natsuki_i",x,y+1,alpha);
		}
	}else{
		drawImg("yuri_1l",x,y);
		drawImg("yuri_1r",x,y);
		if(emotion == "happy"){
			drawImg("yuri_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			//drawImg("natsuki_i",x,y+1,alpha);
		}
	}
}

function drawMonika(x,y,emotion,alpha){
	if(alpha != null){
		drawImg("monika_1l",x,y,alpha);
		drawImg("monika_1r",x,y,alpha);
		if(emotion == "happy"){
			drawImg("monika_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			//drawImg("natsuki_i",x,y+1,alpha);
		}
	}else{
		drawImg("monika_1l",x,y);
		drawImg("monika_1r",x,y);
		if(emotion == "happy"){
			drawImg("monika_a",x,y+1,alpha);
		}else if(emotion == "angry talking"){
			//drawImg("natsuki_i",x,y+1,alpha);
		}
	}
}

function animations(character,x,y,emotion,type){
	if(character == "Sayori"){
		if(type == "fadeIn"){
			if(alpha < 100){
				drawSayori(x,y,emotion,alpha);
				alpha+=4;
			}else{
				drawSayori(x,y,emotion);
			}
		}else if(type == null){
			drawSayori(x,y,emotion);
		}
	}
	if(character == "Natsuki"){
		if(type == "fadeIn"){
			if(alpha < 100){
				drawNatsuki(x,y,emotion,alpha);
				alpha+=4;
			}else{
				drawNatsuki(x,y,emotion);
			}
		}
	}
	if(character == "Yuri"){
		if(type == "fadeIn"){
			if(alpha < 100){
				drawYuri(x,y,emotion,alpha);
				alpha+=4;
			}else{
				drawYuri(x,y,emotion);
			}
		}
	}
	if(character == "Monika"){
		if(type == "fadeIn"){
			if(alpha < 100){
				drawMonika(x,y,emotion,alpha);
				alpha+=4;
			}else{
				drawMonika(x,y,emotion);
			}
		}
	}
}

function drawScene1(){
	scene1 = true;
	//audio("1","stop");
	//audio("2","play");
	drawImg("residential",0,0);
	if(next > 7 && next <= 9){
		animations("Sayori",50,0,"frustrated","fadeIn");
	}
	if(next > 9){
		animations("Sayori",50,0,"happy",null);
	}
	drawImg("namebox",45,300);
	drawTextBox();
	if(next == 26){
		scene1 = false;
		black_x -= 2;
		drawRect(black_x,0,500,400,"#000000");
		if(black_x == 0 || black_x < 0){
			document.body.setAttribute("style","background-image: url('images/bg/background2.png')");
			audio("2","stop");
			audio("3","play");
			drawImg("class",0,0);
			drawRect(black_x,0,500,400,"#000000");
		}
		if(black_x < -600){
			alpha = 0;
			black_x = 600;
			dialog = "";
			dialog2 = "";
			textScroll = 0;
			next++;
			clearInterval(x);
			x = setInterval(drawScene2,1);
		}
	}
}

function blackTrans(nextValue,nextScene,audioTrack,sceneBG){
	if(next == nextValue){
		scene1 = false;
		black_x -= 2;
		drawRect(black_x,0,500,400,"#000000");
		if(black_x == 0 || black_x < 0){
			audio(audioTrack,"stop");
			audio(audioTrack,"play");
			drawImg(sceneBG,0,0);
			drawRect(black_x,0,500,400,"#000000");
		}
		if(black_x < -600){
			alpha = 0;
			black_x = 600;
			dialog = "";
			dialog2 = "";
			textScroll = 0;
			next++;
			clearInterval(x);
			x = setInterval(drawScene2,1);
		}
	}
}

function drawScene2(){
	scene1 = true;
	drawImg("class",0,0);
	if(next >= 30){
		animations("Sayori",50,0,"happy","fadeIn");
	}
	drawImg("namebox",45,300);
	drawTextBox();
	if(next == 54){
		scene1 = false;
		black_x -= 2;
		drawRect(black_x,0,500,400,"#000000");
		if(black_x == 0 || black_x < 0){
			audio("3","stop");
			audio("5","play");
			drawImg("club",0,0);
			drawRect(black_x,0,500,400,"#000000");
		}
		if(black_x < -600){
			alpha = 0;
			black_x = 600;
			dialog = "";
			dialog2 = "";
			textScroll = 0;
			next++;
			clearInterval(x);
			x = setInterval(drawScene3,1);
		}
	}
}

function drawScene3(){
	scene1 = true;
	drawImg("club",0,0);
	if(next >= 56){
		animations("Sayori",10,0,"happy","fadeIn");
		animations("Yuri",140,0,"happy","fadeIn");
		animations("Natsuki",240,0,"happy","fadeIn");
		animations("Monika",-130,0,"happy","fadeIn");
	}
	drawImg("namebox",45,300);
	drawTextBox();
	if(next == 56){
		scene1 = false;
		black_x -= 2;
		drawRect(black_x,0,500,400,"#000000");
		if(black_x == 0 || black_x < 0){
			audio("5","stop");
			audio("4","play");
			drawImg("notebook",0,0);
			drawRect(black_x,0,500,400,"#000000");
		}
		if(black_x < -600){
			alpha = 0;
			black_x = 600;
			dialog = "";
			dialog2 = "";
			textScroll = 0;
			next++;
			clearInterval(x);
			x = setInterval(drawScene4,50);
		}
	}
}

function drawTextBox(){
	drawImg("textbox",25,320); //Can hold 45 characters per line
	drawText(charSpeaking[next],65,315,"18px","#ff00c3",2);
	if(textScroll <= 45){
		var textChar = scripts[next].slice(textScroll,textScroll+1);
		dialog = dialog + textChar;
		drawText(dialog,30,350,"24px","#000000",4);
		textScroll++;
	}else{
		drawText(dialog,30,350,"24px","#000000",4);
	}
	if(scripts[next].length > 45 && textScroll >= 45 && textScroll <= 90){
		var textChar2 = scripts[next].slice(textScroll,textScroll+1);
		dialog2 = dialog2 + textChar2;
		drawText(dialog2,30,375,"24px","#000000",4);
		textScroll++;
	}else{
		if(dialog2 != null){
			drawText(dialog2,30,375,"24px","#000000",4);
		}
	}
}

function drawScene4(){
	drawScene1 = false;
	poemGame = true;
	poemText = true;
	drawImg("notebook",0,0);
	var sticker = Math.floor((Math.random() * 20) + 1);
	if(sticker == 1){
		if(m_stickerX == 0){
			mPoem = "m_sticker_3";
			m_stickerX += 10;
		}else if(m_stickerX == 10){
			mPoem = "m_sticker_1";
			m_stickerX -= 10;
		}
	}else if(sticker == 2){
		if(n_stickerX == 55){
			nPoem = "n_sticker_3";
			n_stickerX += 10;
		}else if(n_stickerX == 65){
			nPoem = "n_sticker_1";
			n_stickerX -= 10;
		}
	}else if(sticker == 3){
		if(y_stickerX == 100){
			yPoem = "y_sticker_3";
			y_stickerX += 10;
		}else if(y_stickerX == 110){
			yPoem = "y_sticker_1";
			y_stickerX -= 10;
		}
	}else if(sticker == 4){
		if(s_stickerX == 145){
			sPoem = "s_sticker_3";
			s_stickerX += 10;
		}else if(s_stickerX == 155){
			sPoem = "s_sticker_1";
			s_stickerX -= 10;
		}
	}
	if(n_stickerJump == 1){
		nPoem = "n_sticker_2";
		n_stickerY -= 10;
		n_stickerJump = 2;
	}else if(n_stickerJump == 2){
		nPoem = "n_sticker_2";
		n_stickerY += 10;
		n_stickerJump = 3;
	}else if(n_stickerJump == 3){
		nPoem = "n_sticker_2";
		n_stickerY -= 10;
		n_stickerJump = 4;
	}else if(n_stickerJump == 4){
		nPoem = "n_sticker_1";
		n_stickerY += 10;
		n_stickerJump = 0;
	}
	if(s_stickerJump == 1){
		sPoem = "s_sticker_2";
		s_stickerY -= 10;
		s_stickerJump = 2;
	}else if(s_stickerJump == 2){
		sPoem = "s_sticker_2";
		s_stickerY += 10;
		s_stickerJump = 3;
	}else if(s_stickerJump == 3){
		sPoem = "s_sticker_2";
		s_stickerY -= 10;
		s_stickerJump = 4;
	}else if(s_stickerJump == 4){
		sPoem = "s_sticker_1";
		s_stickerY += 10;
		s_stickerJump = 0;
	}
	if(y_stickerJump == 1){
		yPoem = "y_sticker_2";
		y_stickerY -= 10;
		y_stickerJump = 2;
	}else if(y_stickerJump == 2){
		yPoem = "y_sticker_2";
		y_stickerY += 10;
		y_stickerJump = 3;
	}else if(y_stickerJump == 3){
		yPoem = "y_sticker_2";
		y_stickerY -= 10;
		y_stickerJump = 4;
	}else if(y_stickerJump == 4){
		yPoem = "y_sticker_1";
		y_stickerY += 10;
		y_stickerJump = 0;
	}
	if(m_stickerJump == 1){
		mPoem = "m_sticker_2";
		m_stickerY -= 10;
		m_stickerJump = 2;
	}else if(m_stickerJump == 2){
		mPoem = "m_sticker_2";
		m_stickerY += 10;
		m_stickerJump = 3;
	}else if(m_stickerJump == 3){
		mPoem = "m_sticker_2";
		m_stickerY -= 10;
		m_stickerJump = 4;
	}else if(m_stickerJump == 4){
		mPoem = "m_sticker_1";
		m_stickerY += 10;
		m_stickerJump = 0;
	}
	drawImg(mPoem,m_stickerX,m_stickerY);
	drawImg(nPoem,n_stickerX,n_stickerY);
	drawImg(yPoem,y_stickerX,y_stickerY);
	drawImg(sPoem,s_stickerX,s_stickerY);
	console.log(poemSelect);
	if(poemPage == 0){
		if(poemSelect == 0){
			drawText("cupcake",216,100,"24px","#ff82e2",5);
			drawText("cupcake",216,100,"24px","#ff82e2",5);
			drawText("happy",216,150,"24px",null,0);
			drawText("yeet",216,200,"24px",null,0);
			drawText("fog",320,100,"24px",null,0);
			drawText("swamp",320,150,"24px",null,0);
			drawText("summer",320,200,"24px",null,0);
			drawText("yeet",216,200,"24px",null,0);
			drawText("summer",320,200,"24px",null,0);
		}else if(poemSelect == 1){
			drawText("cupcake",216,100,"24px",null,0);
			drawText("happy",216,150,"24px","#ff82e2",5);
			drawText("happy",216,150,"24px","#ff82e2",5);
			drawText("yeet",216,200,"24px",null,0);
			drawText("fog",320,100,"24px",null,0);
			drawText("swamp",320,150,"24px",null,0);
			drawText("summer",320,200,"24px",null,0);
			drawText("yeet",216,200,"24px",null,0);
			drawText("summer",320,200,"24px",null,0);
		}else if(poemSelect == 2){
			drawText("cupcake",216,100,"24px",null,0);
			drawText("happy",216,150,"24px",null,0);
			drawText("yeet",216,200,"24px","#ff82e2",5);
			drawText("yeet",216,200,"24px","#ff82e2",5);
			drawText("yeet",216,200,"24px",null,0);
			drawText("fog",320,100,"24px",null,0);
			drawText("fog",320,100,"24px",null,0);
			drawText("swamp",320,150,"24px","#000000",0);
			drawText("summer",320,200,"24px","#000000",0);
			drawText("yeet",216,200,"24px","#000000",0);
			drawText("summer",320,200,"24px","#000000",0);
		}else if(poemSelect == 3){
			drawText("cupcake",216,100,"24px",null,0);
			drawText("happy",216,150,"24px","#000000",0);
			drawText("yeet",216,200,"24px","#000000",0);
			drawText("fog",320,100,"24px","#ff82e2",5);
			drawText("fog",320,100,"24px","#ff82e2",5);
			drawText("swamp",320,150,"24px","#000000",0);
			drawText("summer",320,200,"24px","#000000",0);
			drawText("yeet",216,200,"24px","#000000",0);
			drawText("summer",320,200,"24px","#000000",0);
		}else if(poemSelect == 4){
		
		}else if(poemSelect == 5){
		
		}else if(poemSelect == 6){
		
		}else if(poemSelect == 7){
		
		}else if(poemSelect == 8){
		
		}else if(poemSelect == 9){
		
		}else{
		
		}
	}else if(poemPage == 1){
		scene1 = false;
		poemGame = false;
		poemText = false;
		black_x -= 10;
		drawRect(black_x,0,500,400,"#000000");
		if(black_x == 0 || black_x < 0){
			audio("4","stop");
			background("#000000");
			drawRect(black_x,0,500,400,"#000000");
		}
		if(black_x < -600){
			alpha = 0;
			black_x = 600;
			dialog = "";
			dialog2 = "";
			textScroll = 0;
			next++;
			clearInterval(x);
			x = setInterval(drawSceneSKill,1);
		}
	}
}

function drawSceneSKill(){
	scene1 = true;
	console.log(next);
	if(next < 61){
		background("#000000");
		drawImg("namebox",45,300);
		drawTextBox();
	}
	if(next >= 61){
		isDead = 1;
		drawImg("s_kill_bg",0,0);
		drawImg("s_kill",100,0);
		audio("d","play");
		setTimeout(SKill2,11000);
	}
}

function SKill2(){
	clearInterval(x);
	x = setInterval(SKill2,1);
	if(noise == 1 || noise == 5){
		drawImg("glitch",0,0);
	}else if(noise == 2 || noise == 6){
		drawImg("glitch-blue",0,0);
	}else if(noise == 3 || noise == 7){
		drawImg("glitch-green",0,0);
	}else if(noise == 4 || noise == 8){
		drawImg("glitch-red",0,0);
	}
	if(noise > 8){
		drawImg("s_kill_bg2",0,0);
		drawImg("s_kill2",100,0);
	}
	noise++;
	if(noise > 5000){
		noise = 1;
		audio("d","stop");
		clearInterval(x);
		//setTimeout(drawStatic,1);
		x = setInterval(drawStatic,1);
	}
}

function drawStatic(){
	audio("s_kill_early","play");
	if(noise == 1){
		drawImg("noise1",0,0);
	}else if(noise == 2){
		drawImg("noise2",0,0);
	}else if(noise == 3){
		drawImg("noise3",0,0);
	}else if(noise == 4){
		drawImg("noise4",0,0);
	}
	if(noise == 4){
		noise = 1;
	}else{
		noise++;
	}
	setTimeout(ddlc_restart,10000);
}

function ddlc_restart(){
	audio("s_kill_early","stop");
	document.body.setAttribute("style","background-image: url('images/bg/background.png')");
	splash = 0;
	brightness = 100;
	logo_y = -100;
	girls_y = 600;
	girls2_y = 600;
	sidebar_x = -500;
	menu_option = 1;
	audio("1","play");
	drawImg("splashG",0,0);
	clearInterval(x);
	setTimeout(ddlc_start,3000);
}