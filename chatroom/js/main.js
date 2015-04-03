require.config({
	baseUrl:'js',
	path: {
		'jquery':'vendor/jquery-1.10.2',
		'controller':'controller'
	}
})
require(['controller','controller'],function(controller){
	controller.start();
});