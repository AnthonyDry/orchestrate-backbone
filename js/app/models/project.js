define([
  'underscore',
  'backbone'
], function( _, Backbone) {

  var ProjectModel = Backbone.Model.extend({

    /**
     * Default values.
     */

    defaults: {
      title: 'Title',
      archived: false,
      issues: []
    },

    /**
     * Toggle archived value.
     */

    toggle: function() {
      this.save({
        archived: !this.get('archived')
      });
    }
  });

  return ProjectModel;
});