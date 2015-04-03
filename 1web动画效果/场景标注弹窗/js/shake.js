window.onload = function(){
	var item = getClass(document,"a","item");
	var obj_top;
	var obj_left;
	function move(obj,targetTop){
		obj_top = parseFloat(obj.style.top);
		if(obj_top<targetTop){
			obj_top = obj_top +2;
		}else{
			obj_top = obj_top -2;
		}
		obj.style.top = obj_top + "px";
		moveFun = setTimeout(function(){
			move(obj,targetTop);
		},1);
		if(obj_top-targetTop==0){
			clearInterval(moveFun);
		}
	}
	function shake(obj){
		move(obj,parseFloat(obj.style.top) - 20);
		setTimeout(function(){
			move(obj,parseFloat(obj.style.top) + 20);
		},50)
		setTimeout(function(){
			move(obj,parseFloat(obj.style.top) - 20);
		},100)
		setTimeout(function(){
			move(obj,parseFloat(obj.style.top) + 20);
		},150)
	}

	function display_shake(obj){
		obj.style.display = "block";
		shake(obj);
	}

	function shakeAll(){
		display_shake(item[0]);
		setTimeout(function(){
			console.log(1);
			display_shake(item[1])
		},500);
		setTimeout(function(){
			display_shake(item[2])
		},1000);
		setTimeout(function(){
			display_shake(item[3])
		},1500);
		setTimeout(function(){
			display_shake(item[4])
		},2000);
		return 1;
	}
	shakeAll();

	





}