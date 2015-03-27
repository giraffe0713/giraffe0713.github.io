// 首页控制器
define([
	'text!indexHtml',
	'hotTopic'
],function(indexHtml,HotTopic){
	var View = Backbone.View.extend({
		className :"index-page",
		events:{
			'click .js-link':'goListAction'
		},
		render: function(){
			this.$el.html(indexHtml);
			var topicView = new HotTopic();
			this.$el.append(topicView.el);
		},
		goListAction: function(e){
			e.preventDefault();
			var link = $(e.target).attr('href');

			Backbone.history.navigate(link,true);
		}
	});
	return View;
})