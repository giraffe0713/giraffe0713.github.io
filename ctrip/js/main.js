require.config({
  baseUrl: 'js',
  paths: {
    'app': 'app',
  }
});

// Start app
require(['app','DomFun'], function(app,DomFun) {
  app.start();
});