// 导航onmouseover延展方法
function navFun(obj1,obj2){
	var ori_Class = obj1.className;
	obj1.onmouseover = function(){
		if(obj1.className.indexOf(" ")==-1){
			var the_class = obj1.className;
			var new_class = the_class + "-curr";
			addClass(obj1,new_class);
			obj2.style.display = "block";
		}
	}
	obj1.onmouseout = function(){
		obj1.className = ori_Class;
		obj2.style.display = "none";
	}
}