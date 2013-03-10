define([
  'underscore',
  'backbone'
], function( _, Backbone ) {

  var StatusModel = Backbone.Model.extend({

    /**
     * Default values.
     */

    defaults: {
      statusTitle: 'Title',
      issues: []
    }
  });

  return StatusModel;
});