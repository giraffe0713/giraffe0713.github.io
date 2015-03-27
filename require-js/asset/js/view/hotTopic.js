define([
	'text!indexHmtl',
],function(topicHtml){
	var TopicView = Backbone.View.extend({
		events:{};
		initialize:function(){
			this.render();
		},
		render: function(){//视图加载或渲染
			this.$el.html(topicHtml);
		}
	});
	return TopicView;
})