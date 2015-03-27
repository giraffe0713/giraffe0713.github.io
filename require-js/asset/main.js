require.config({
	baseUrl : 'asset',
	shim:{
		jquery: {
			exports: '$'
		},
		backbone: {
			deps: ['_',"jquery"]
		}
	},
	paths: {
		//框架
		'jquery': 'vendor/jquery-2.1.3',
		'text':'vendor/text',
		'_':'vendor/underscore',
		'backbone':'vendor/backbone',


		//团队模块化
		'app':'js/app',
		'hotTopic':'js/view/hotTopic',

		//模板
		'indexHtml':'template/index.html',
		'listHtml':'template/list.html',
		'topicHtml':'template/hot-topic.html'
	}
});

//开启app
require(['app'],function(app){
	app.start();
});