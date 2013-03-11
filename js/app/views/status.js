 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var StatusView = Backbone.View.extend({

    /**
     * Load template and compile handlebars template.
     */

    template: Handlebars.compile($('#status-list-template').html()),

    /**
     * Bind events.
     */

    events: {
      'click .delete-status': 'delete'
    },

    /**
     * Render `StatusView`.
     */

    render: function() {
      this.$el.html(this.template(this));
      return this;
    },

    /**
     * Get status title.
     *
     * @return {String}
     */

    statusTitle: function() { return this.model.get('statusTitle'); },

    /**
     * Get status id.
     *
     * @return {Int|String}
     */

    id: function () { return this.model.get('id'); },

    /**
     * Delete status.
     */

    delete: function() {
      this.model.destroy();
    }
  });

  return StatusView;
});