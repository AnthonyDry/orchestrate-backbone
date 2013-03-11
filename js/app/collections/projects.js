define([
  'backbone',
  '../models/project'
], function( Backbone, Project ) {

  var ProjectsCollection = Backbone.Collection.extend({

    /**
     * Set model to `Project`.
     */

    model: Project,

    /**
     * Add localStorage support.
     */

    localStorage: new Backbone.LocalStorage('projects-backbone'),

    /**
     * Get archived projects.
     *
     * @return {Array}
     */

    archived: function() {
      return this.filter(function( project ) {
        return project.get('archived');
      });
    },

    /**
     * Get next order number for new items.
     *
     * @return {Object}
     */

    nextOrder: function() {
      if ( !this.length ) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

   /**
    * Projects are sorted by order attribute.
    *
    * @return {Object}
    */

    comparator: function( project ) {
      return project.get('order');
    },

    /**
     * Initalize and fetch data
     */

    initialize: function(){
      this.fetch();
    }
  });

  return new ProjectsCollection();
});