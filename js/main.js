require.config({
  paths: {
    underscore: 'libs/underscore/underscore-min',
    jquery: 'libs/jquery/jquery-1.9.1.min',
    text: 'libs/require/text',
    handlebars: 'libs/handlebars/handlebars',
    purebackbone: 'libs/backbone/Backbone',
    'bb-loc': 'libs/backbone/backboneLocalstorage',
    'bb-rel': 'libs/backbone/backbone.relational',
    backbone: 'libs/backbone/backbone.all'
  },
	shim: {
		underscore: {
			exports: '_'
		},
		purebackbone: {
			deps: [
        'underscore', 
        'jquery'
      ],
			exports: 'Backbone'
		},
    'bb-rel': {
      deps: [
        'purebackbone',
        'underscore'
      ]
    },
    'bb-loc': {
      deps: [
        'purebackbone',
        'underscore'
      ]
    },
    handlebars: {
      exports: 'Handlebars'
    }
	}
});

require([
  'jquery',
  'Backbone',
  'app/routers/router'
], function( $, Router, Backbone ) {

  new Router({ el: $('#projects') });
  Backbone.history.start();
});