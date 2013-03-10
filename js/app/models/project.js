define([
  'underscore',
  'backbone'
], function( _, Backbone) {

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