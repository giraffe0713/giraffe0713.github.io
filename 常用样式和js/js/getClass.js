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