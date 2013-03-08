define([
  'underscore',
  'backbone',
  '../models/issue',
  '../collections/issues'
], function( _, Backbone, Issue, Issues ) {

  var ProjectModel = Backbone.Model.extend({
    defaults: {
      title: 'Title',
      archived: false,
      issues: []
    },
    toggle: function() {
      this.save({
        archived: !this.get('archived')
      });
    }
  });

  return ProjectModel;
});