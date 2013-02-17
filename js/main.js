require.config({
  paths: {
    underscore: 'underscore/underscore-min',
    backbone: 'backbone/backbone-min',
    jquery: 'jquery/jquery-1.9.1.min',
    backboneLocalstorage: 'backbone/backbone.localStorage-min',
    text: 'require/text'
  },
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
        'underscore', 
        'jquery'
      ],
			exports: 'Backbone'
		},
    backboneLocalstorage: {
      deps: ['backbone'],
      exports: 'Store'
    }
	}
});

require([
  'app/views/app',
  'app/routers/router'
], function( AppView, Orchestrate ) {

  new Orchestrate();
  Backbone.history.start();

  new AppView();
});