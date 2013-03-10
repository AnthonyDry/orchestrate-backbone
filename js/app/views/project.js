 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var ProjectView = Backbone.View.extend({

    /**
     * Load template and compile handlebars template.
     */

     template: Handlebars.compile($('#project-list-template').html()),

    /**
     * Bind events.
     */

    events: {
      'click .delete-project': 'delete'
    },

    /**
     * Render `ProjectView`.
     */

    render: function() {
      this.$el.html(this.template(this));
      return this;
    },

    /**
     * Get project title.
     *
     * @return {String}
     */

    title: function() { return this.model.get('title'); },

    /**
     * Get project id.
     *
     * @return {String|Int}
     */

    id: function () { return this.model.get('id'); },

    /**
     * Delete project.
     */

    delete: function() {
      this.model.destroy();
    }
  });

  return ProjectView;
});