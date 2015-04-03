define(function(){
	var headerFun = {};
	headerFun.start = function(){
		require(['DomFun','navHover'],function(DomFun,navHover){
			var other_lang = getClass("ul","other-lang");
		    var lang_list = getClass("ul","lang-list");
		    var service = getClass("ul","service");
		    var service_box = getClass("div","service-box");
		    navFun(other_lang[0],lang_list[0]);
		    navFun(service[0],service_box[0]);


		    var mobile_link = getClass("a","mobile-link")[0];
		    var mobile_box = getClass("div","mobile-box")[0];
		    var close = getClass("a",'close')[0];
		    mobile_link.onmouseover = function(){
		    	myctrip_body.style.display = "none";
		    	mobile_box.style.display = "block";
		    }
		    mobile_box.onmouseover = function(){
		    	// console.log(1);
		    	myctrip_body.style.display = "none";
		    	mobile_box.style.display = "block";
		    }
		    mobile_box.onmouseout = function(){
		    	// console.log(2);
		    	mobile_box.style.display = "none";
		    }
		    close.onclick = function(){
		    	mobile_box.style.display = "none";
		    }

		    var myctrip = getClass("div","myctrip")[0];
		    var myctrip_head = getClass("div","myctrip-head")[0];
		    var myctrip_body = getClass("div","myctrip-body")[0];
		    myctrip_head.onmouseover = function(){
		    	myctrip_body.style.display = "block";
		    	mobile_box.style.display = "none";
		    }
		    myctrip_body.onmouseover = function(){
		    	mobile_box.style.display = "none";
		    	myctrip_body.style.display = "block";
		    }
		    myctrip_body.onmouseout = function(){
		    	myctrip_body.style.display = "none"
		    }
		})
	}
	return headerFun.start();
})