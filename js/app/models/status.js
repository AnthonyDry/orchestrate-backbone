define([
  'underscore',
  'backbone',
  '../models/issue',
  '../collections/issues'
], function( _, Backbone, Issue, Issues ) {

  var StatusModel = Backbone.Model.extend({
    defaults: {
      statusTitle: 'Title',
      issues: []
    }
  });

  return StatusModel;
});