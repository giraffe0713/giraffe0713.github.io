define(function() {
  var app = {};

  app.start = function() {
    require(['headerFun','navFun'], function(headerFun,navFun) {
      headerFun;
      navFun;
    });
  };


  return app;
});