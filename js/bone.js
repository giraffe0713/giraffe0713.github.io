var body = document.getElementsByTagName("body")[0];

var banner_img_pic = [];
var banner_img = getClass(body,"ul","banner-img")[0];
var banner_img_li = banner_img.getElementsByTagName("li");
for( var i=0;i<banner_img_li.length;i++){
	banner_img_pic.push(banner_img_li[i].getElementsByTagName("a")[0].getElementsByTagName("img")[0]);
}
// console.log(banner_img_pic[1]);

var banner_btn = getClass(body,"ul","banner-btn")[0];
var banner_btn_li = banner_btn.getElementsByTagName("li");
// console.log(banner_btn_li.length);

for (var i =0; i<banner_img_li.length;i++){
	banner_btn_li[i].index = i;
	banner_btn_li[i].onclick = function(){
		console.log(this.index);
		banner_img.style.left = this.index*400 + "px";
		console.log(banner_img.style.left);
	}
}


function moveElement(node,thewidth,theheight,interval){
	xpos = parseFloat(node.style.left);
	ypos = parseFloat(node.style.top);
	if(xpos >= thewidth){
		xpos--;
	}
	if(xpos < thewidth){
		xpos++;
	}
	if(ypos >= theheight){
		ypos--;
	}
	if(ypos < theheight){
		ypos++;
	}
	node.style.left = xpos + "px";
	node.style.top = ypos + "px";
	var timer = setTimeout(moveElement(node,thewidth,theheight,interval),10);
	if(node.style.left==thewidth||node.style.top==theheight){
		clearTimeout(timer);
	}
	console.log(node.style.left);
}

// moveElement(document.getElementById("demo_img"),200,200,1000);


function moveMessage(node,thewidth,theheight,interval){
		xpos =  parseFloat(node.style.left);
		// console.log(xpos);
		ypos =  parseFloat(node.style.top);
		if( xpos > thewidth){
			xpos--;
		}if( xpos < thewidth){
			xpos++;
		}
		if( ypos > theheight){
			ypos--;
		}if( ypos < theheight){
			ypos++;
		}
		node.style.left = xpos + "px";
		node.style.top = ypos + "px";
		movement = setTimeout(function(){moveMessage(node,thewidth,theheight,interval)},10);
		if((xpos-thewidth) == 0 || (thewidth - xpos) == 0){
			clearTimeout(movement);
		}
		console.log(node.style.left);
	}

moveMessage(document.getElementById("demo_img"),200,200,1000)



