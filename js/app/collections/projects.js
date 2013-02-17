define([
  'underscore',
  'backbone',
  'backboneLocalstorage',
  'models/project'
], function( _, Backbone, Store, Project ) {

  var ProjectsCollection = Backbone.Collection.extend({
    model: Project,
    localStorage: new Store('projects-backbone'),
    archived: function() {
      return this.filter(function( project ) {
        return project.get('archived');
      });
    },
    nextOrder: function() {
      if ( !this.length ) {
        return 1;
      }
      return this.last().get('order') + 1;
    },
    comparator: function( project ) {
      return project.get('order');
    }
  });

  return new ProjectsCollection();
});