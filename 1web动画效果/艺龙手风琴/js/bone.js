// $(function(){
// 	var img_link = $(".img-link");
// 	var mask = $(".mask");
// 	var txt = $(".txt");
// 	for(var i=0;i<txt.length;i++){
// 		txt[i].index = i;
// 		img_link[i].index = i;
// 		txt[i].onmouseover = function(){
// 			scaleFun(img_link[this.index],400);
// 			scaleFun(mask[this.index],400);
// 			mask[this.index].style.display = "none";
// 			txt[this.index].style.display = "none";
// 			for(var m=0;m<txt.length;m++){
// 				if(m==this.index){
// 					continue;
// 				}
// 				console.log(m);
// 				mask[m].style.display = "block";
// 				txt[m].style.display = "block";
// 				txt[m].style.padding="35px 95px 35px 45px";
// 				scaleFun(img_link[m],131);
// 				scaleFun(mask[m],131);
// 			}
// 		}
// 	}

// 	function scaleFun(obj,op_width,time){
// 		// var 

// 		var ori_width_1,speed;
// 		ori_width_1= $(obj).width();
// 		speed =(op_width - ori_width)/time;
// 		if(ori_width<op_width){
// 			ori_width = speed + ori_width;
// 		}else if(ori_width>op_width){
// 			ori_width = speed - ori_width;
// 		}else{
// 			ori_width = ori_width;
// 		}
// 		$(obj).width(ori_width);
// 		var scaleFun_timer = setTimeout(function(){scaleFun(obj,op_width)},1);
// 		if(ori_width==op_width){
// 			clearTimeout(scaleFun_timer);
// 		}
// 	}


// })




