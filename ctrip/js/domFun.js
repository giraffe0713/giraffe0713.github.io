// 取类名
function getClass(tagName,className){
	var arr=[];
	var result=[];
	arr = document.getElementsByTagName(tagName);
	for(var i =0;i<arr.length;i++){
		if(arr[i].className.indexOf(className)!=-1){
			result.push(arr[i]);
		}
	}
	return result;
}

//类名的增加
function addClass(ele,new_class){
	var the_class = ele.className;
	ele.className = the_class + " " + new_class;
}