define(function(){
	var navFun = {};

	navFun.start = function(){
		require(['domFun'],function(){
			var nav_tit = getClass("ul","nav-tit-list")[0];
			var nav_tit_list = getClass("li","nav-tit-list");
			var nav_con = getClass("div","nav-con");
			console.log(nav_tit_list);
			console.log(nav_con);
			for(var i =0;i<nav_tit_list.length;i++){
				nav_tit_list[i].index = i;
				nav_tit_list[i].onmouseover = function(){
					for(var m=0;m<nav_con.length;m++){
						nav_tit_list[m].className = "nav-tit-list"
						nav_con[m].style.display = "none";
					}
					nav_tit_list[0].className = "nav-tit-list nav-tit-list-curr";
					this.className ="nav-tit-list nav-tit-list-curr";
					nav_con[this.index].style.display = "block";
				}
			}
		})
	}
	return navFun.start();
})