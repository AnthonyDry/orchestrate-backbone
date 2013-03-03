define([
  'underscore',
  'backbone'
], function( _, Backbone ) {

  var StatusModel = Backbone.Model.extend({

    defaults: {
      statusTitle: 'Title'
    }
  });

  return StatusModel;
});