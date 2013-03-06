require.config({
  paths: {
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    jquery: 'libs/jquery/jquery-1.9.1.min',
    backboneLocalstorage: 'libs/backbone/backbone.localStorage',
    backboneRelational: 'libs/backbone/backbone.relational',
    text: 'libs/require/text',
    handlebars: 'libs/handlebars/handlebars'
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
    },
    backboneRelational: {
      deps: [
        'underscore', 
        'jquery'
      ]
    },
    handlebars: {
      exports: 'Handlebars'
    }
	}
});

require([
  'jquery',
  'app/routers/router'
], function( $, Router ) {

  new Router({ el: $('#projects') });
  Backbone.history.start();
});