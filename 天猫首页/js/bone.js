// 通过类名取得对象
function getClass(parentNode,tagName,className){
	var arr =[],all=[];
	all = parentNode.getElementsByTagName(tagName);
	for( var i =0;i<all.length;i++){
		if(all[i].className.indexOf(className) != -1){
			arr.push(all[i]);
		}
	}
	return arr;
}

// 生成随机数
function selectFrom(lowerValue,upperValue){
	var choices = upperValue - lowerValue;
	return Math.floor(Math.random()*choices + lowerValue);
}



// 移动
function moveMessage(node,thewidth,theheight,speed,interval){
	xpos =  parseFloat(node.style.left);
	// console.log(xpos);
	ypos =  parseFloat(node.style.top);
	if( xpos > thewidth){
		xpos-=speed;
	}if( xpos < thewidth){
		xpos+=speed;
	}
	if( ypos > theheight){
		ypos-=speed;
	}if( ypos < theheight){
		ypos+=speed;
	}
	node.style.left = xpos + "px";
	node.style.top = ypos + "px";
	movement = setTimeout(function(){moveMessage(node,thewidth,theheight,speed,interval)},interval);
	if((xpos-thewidth) == 0 || (thewidth - xpos) == 0){
		clearTimeout(movement);
	}
	// console.log(node.style.left);
}


// 渐变出现
function changeOpacity(node){
	var changeOpacitytimer;
	var op = 0;
	changeOpacityFun(node);
	function changeOpacityFun(node){
		op += 0.01;//op=0.1
		// console.log(op);
		node.style.opacity = op;
		changeOpacitytimer = setTimeout(function(){changeOpacityFun(node)},10);
		if(node.style.opacity >= 1){
			clearInterval(changeOpacitytimer);
		}
		// console.log(node.style.opacity);
	}
}

// 宽度，高度渐变805
function flexable(node,thewidth,theheight,speed,interval){
	var wid = parseFloat(node.style.width);
	// console.log(node.style.width);
	var hei = parseFloat(node.style.height);
	if(wid<thewidth){
		wid+=speed;
	}
	if(wid>thewidth){
		wid-=speed;
	}
	if(hei<theheight){
		hei+=speed;
	}
	if(hei>theheight){
		hei-=speed;
	}
	node.style.width = wid + "px";
	node.style.height = hei + "px";
	flexable_timer = setTimeout(function(){flexable(node,thewidth,theheight,speed,interval)},interval);
	if(node.style.width == thewidth || node.style.height == theheight){
		clearTimeout(flexable_timer);
	}
}


window.onload = function(){
	var banner = getClass(document,"div","banner")[0];
	// console.log(banner);
	var banner_box = getClass(document,"div","banner-box")[0];
	// console.log(banner_box);
	var nav_ver = getClass(document,"div","nav_ver")[0];
	// console.log(nav_ver);
	var nav_ver_li = nav_ver.getElementsByTagName("li");
	var nav_ver_li_a = [];
	var nav_ver_li_timer = {};
	for(var i =1; i<nav_ver_li.length;i++){
		nav_ver_li_a[i] = nav_ver_li[i].getElementsByTagName("a")[0];
	}



	// 竖导航添加hover移动效果
	var banner_nav_img = getClass(document,"div","banner-nav-img")[0];
	// console.log(banner_nav_img);
	var banner_nav_img_item = getClass(banner_nav_img,"div","banner-img-item");
	// console.log(banner_nav_img_item.length);
	var nav_ver_con = getClass(document,"div","nav_ver_con")[0];
	// console.log(nav_ver_con);
	var nav_ver_con_ul = nav_ver_con.getElementsByTagName("ul");
	// console.log(nav_ver_con_ul.length);
	for(var i =1;i<nav_ver_li.length;i++){
		nav_ver_li[i].index = i;
		// console.log(nav_ver_li.length);
		nav_ver_li[i].onmouseover = function(){
			// 清除自动播放的定时器
			clearTimeout(autoPlay_timer);

			//先重置外部
			banner_img.style.display = "none";
			// 按钮本身的动作
			moveMessage(nav_ver_li_a[this.index],5,0,0.5,10);
			
			// 导航内导航
			nav_ver_con.style.display = "block";
			nav_ver_con.style.left = "190px";
			// console.log(nav_ver_li.length);
			for(var m =0;m<nav_ver_li.length;m++){
				banner_nav_img_item[m].style.display = "none";
				nav_ver_con_ul[m].style.display = "none";
			}
			nav_ver_con_ul[this.index-1].style.display = "block";
			moveMessage(nav_ver_con,180,0,0.5,20);

			for(var m=1;m<nav_ver_li.length;m++){
				nav_ver_li[m].className = "";
			}
			
			// 大背景图切换
			banner_nav_img.style.display = "block";
			banner_nav_img_item[this.index].style.display = "block";
			if((this.index%2)==0){
				banner.className = "banner banner1";
			}else{
				banner.className = "banner banner2"
			}
			changeOpacity(banner_nav_img_item[this.index]);
			// flexable(banner_img_main[this.index],810,480,1,50);
		}
		nav_ver_li[i].onmouseout = function(){
			nav_ver_li_timer = moveMessage(nav_ver_li_a[this.index],0,0,0.5,10);
			setTimeout(moveMessage(nav_ver_li_a[this.index],5,0,0.5,10),100);
			nav_ver_li[this.index].className = "curr";
		}
	}


	var time =0;
	var autoPlay_timer;
	var autoPlay_timer2;



	// banner自动轮播
	function autoPlay(arr){
		autoPlayFun();
		function autoPlayFun(){
			// console.log(1);
			for(var i =0;i<arr.length;i++){
				arr[i].style.display = "none";
				banner_btn_a[i].className = "";
			}
			changeOpacity(arr[time]);
			arr[time].style.display = "block";
			if((time%2)==0){
				banner.className = "banner banner1";
			}else{
				banner.className = "banner banner2"
			}
			banner_btn_a[time].className= "curr";
			flexable(banner_img_main[time],810,480,1,50);
			// console.log(time);
			// console.log(arr[time])
			time++;
			autoPlay_timer = setTimeout(autoPlayFun,2000);
			// console.log(time);
			if(time == 6){
				time = 0;
			}
		}
	}
	autoPlay_timer = setTimeout(function(){autoPlay(banner_img_item)},2000);


	// 一层自动播放
	var lf2= 0;
	function autoPlay2(arr){
		autoPlayFun2();
		function autoPlayFun2(){
			// console.log(circle_play_ul.style.left);
			lf2 = parseFloat(circle_play_ul.style.left);
			// console.log("lf2" +":"+lf2);
			lf2-=100;
			// console.log(time);
			// console.log(lf2);
			if(lf2 == (-300)){
				circle_play_ul.style.left = "0";
				lf2 = -100;
			}
			moveMessage(circle_play_ul,lf2,0,1,1);

			autoPlay_timer = setTimeout(autoPlayFun2,2000);
		}
	}
	autoPlay_timer2 = setTimeout(function(){autoPlay2(circle_play_ul)},2000);


	// 大banner的透明度渐变效果
	// var changeOpacity_timer = {};
	var banner_btn = getClass(document,"div","banner-btn")[0];
	var banner_btn_a = banner_btn.getElementsByTagName("a");
	var banner_img = getClass(document,"div","banner-img")[0];
	var banner_img_item = getClass(banner_img,"div","banner-img-item");
	// console.log(banner_img_item.length);
	for( var i =0; i<banner_btn_a.length;i++){
		banner_btn_a[i].index = i;
		banner_btn_a[i].onmouseover = function(){
			clearTimeout(autoPlay_timer);
			if((this.index%2)==0){
				banner.className = "banner banner1";
			}else{
				banner.className = "banner banner2"
			}
			// clearTimeout(changeOpacity_timer);
			banner_nav_img.style.display = "none";
			for(var m = 0;m < banner_btn_a.length; m++){
				banner_btn_a[m].className = "";
				banner_img_item[m].style.display = "none";
			}
			// banner_img_item[this.index].style.opacity = 0;
			banner_img_item[this.index].style.display = "block";
			changeOpacity(banner_img_item[this.index]);
			banner_btn_a[this.index].className = "curr";
		}
		banner_btn_a[i].onmouseout = function(){
			time = this.index + 1;
			autoPlay_timer = setTimeout(function(){autoPlay(banner_img_item)},2000);
		}
	}
	// banner图片缩小

	var banner_img_main = [];
	for(var i =0;i<banner_img_item.length;i++){
		banner_img_main.push(getClass(banner_img_item[i],"img","banner-img-main")[0])
		// console.log(banner_img_main);
	}





//hotbrand
//头部导航的切换
var hotbrand_head = getClass(document,"div","hotbrand-head")[0];
var hotbrand_content = getClass(document,"div","hotbrand-content")[0];
var hotbrand_nav = getClass(hotbrand_head,"ul","nav")[0];
var hotbrand_nav_li = hotbrand_nav.getElementsByTagName("li");
var brand_show_box = getClass(document,"div","brand-show-box")[0];
var brand_show_box_item = brand_show_box.getElementsByTagName("ul");
var brand_show_box_item_li;
brand_show_box_item_li = brand_show_box.getElementsByTagName("li");
// console.log(brand_show_box_item_li);
for(var i=0;i<brand_show_box_item_li.length;i++){
	brand_show_box_item_li[i].index = i;
	brand_show_box_item_li[i].onmouseover = function(){
		getClass(brand_show_box_item_li[this.index],"span","like")[0].style.display = "block";
	}
	brand_show_box_item_li[i].onmouseout = function(){
		getClass(brand_show_box_item_li[this.index],"span","like")[0].style.display = "none";
	}
}

for(var i =0; i<hotbrand_nav_li.length;i++){
	hotbrand_nav_li[i].index = i;
	hotbrand_nav_li[i].onclick = function(){
		for(var m=0;m<brand_show_box_item.length;m++){
			brand_show_box_item[m].style.display = "none";
			hotbrand_nav_li[m].getElementsByTagName("a")[0].className = "";
		}
		brand_show_box_item[this.index].style.display = "block";
		hotbrand_nav_li[this.index].getElementsByTagName("a")[0].className = "curr";
	}
}

//给换一批加切换
var change = getClass(hotbrand_content,"a","change")[0];
change.onclick = function(){
	var num = selectFrom(0,3);
	// console.log(num);
	for(var i =0;i<brand_show_box_item.length;i++){
		brand_show_box_item[i].style.display = "none";
	}
	brand_show_box_item[num].style.display = "block";
	// console.log(1);
}

//图片的展开
var sidebar_timer;
var sidebar = getClass(document,"div","sidebar")[0];
var sidebar_flex = getClass(sidebar,"div","sidebar-flex")[0];
// console.log(sidebar);
sidebar.onmouseover = function(){
	sidebar_flex.style.display = "block";
}
sidebar.onmouseout = function(){
	sidebar_flex.style.display = "none";
}



// 一层的点击轮播
var circle_play = getClass(document,"div","circle-play")[0];
var circle_play_ul = getClass(circle_play,"div","circle-play-ul")[0].getElementsByTagName("ul")[0];
var circle_play_ul_li = circle_play_ul.getElementsByTagName("li");
var circle_play_ul_a = [];
var arrow_left = getClass(circle_play,"a","arrow-left")[0];
var arrow_right = getClass(circle_play,"a","arrow-right")[0];
// console.log(arrow_right);
for(var i =0;i<circle_play_ul_li.length;i++){
	circle_play_ul_a.push(circle_play_ul_li[i].getElementsByTagName("a")[0]);
}
for(var i=0;i<circle_play_ul_a.length;i++){
	circle_play_ul_a[i].index = i;
	circle_play_ul_a[i].onmouseover = function(){
		this.style.left=0;
		moveMessage(this,-5,0,2,1);	
	}
	circle_play_ul_a[i].onmouseout = function(){
		// console.log(1);
		moveMessage(this,0,0,2,1);	
	}
}
circle_play.onmouseover = function(){
	arrow_left.style.color = "#CCCCCC";
	arrow_right.style.color = "#CCCCCC";
	clearTimeout(autoPlay_timer2);
}

circle_play.onmouseout = function(){
	arrow_left.style.color = "#F0F0F0";
	arrow_right.style.color = "#F0F0F0";
	autoPlay_timer2 = setTimeout(function(){autoPlay2(circle_play_ul)},2000);
}


var lf=0;
circle_play_ul.style.left = 0;
circle_play_ul.style.width = 100*(circle_play_ul_li.length) + "px";
arrow_left.onclick = function(){
	// console.log(circle_play_ul.style.left);
	clearTimeout(autoPlay_timer2);
	if(circle_play_ul.style.left == "0px"){
		circle_play_ul.style.left = "-300px";
	}
	lf = parseFloat(circle_play_ul.style.left);
	lf+=100;
	setTimeout(function(){moveMessage(circle_play_ul,lf,0,2,1)},100);
	// console.log(circle_play_ul.style.left);
}
arrow_right.onclick = function(){
	// console.log(circle_play_ul.style.left);
	clearTimeout(autoPlay_timer2);
	if(circle_play_ul.style.left == "-300px"){
		circle_play_ul.style.left = "0px";
	}
	lf = parseFloat(circle_play_ul.style.left);
	lf-=100;
	setTimeout(function(){moveMessage(circle_play_ul,lf,0,2,1)},100);
	// console.log(circle_play_ul.style.left);
}



// 一层格子hover微动
var floor_grid = getClass(document,"div","floor-grid")[0];
// console.log(floor_grid);
var floor_grid_li = floor_grid.getElementsByTagName("li");
var floor_grid_img = [];
// console.log(floor_grid_li);
for(var i =0; i<floor_grid_li.length;i++){
	floor_grid_img.push(floor_grid_li[i].getElementsByTagName("a")[0].getElementsByTagName("img")[0]);
}
for(var i =0;i<floor_grid_li.length;i++){
	floor_grid_li[i].index = i;
	floor_grid_li[i].onmouseover = function(){
		floor_grid_img[this.index].style.left = 0;
		moveMessage(floor_grid_img[this.index],-5,0,0.5,10);
	}
	floor_grid_li[i].onmouseout = function(){
		moveMessage(floor_grid_img[this.index],0,0,0.5,10);
	}
}


}