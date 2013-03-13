define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses',
  '../views/status'
], function( $, Backbone, Handlebars, statuses, StatusView ) {

  var StatusesView = Backbone.View.extend({

    /**
     * Load template and compile handlebars template.
     */

    template: Handlebars.compile($('#status-template').html()),

    /**
     * Initialize `ProjectsView`.
     */

    initialize: function() {
      this.statuses = statuses;
      this.statuses.on('all', this.render, this);
    },

    /**
     * Bind events.
     */

    events: {
      'click #addstatus': 'addStatus'
    },

    /**
     * Render `StatusesView`.
     */

    render: function() {
      this.$el.html(this.template(this));
      this.statuses.each(this.populateStatusList, this);
      return this;
    },

    /**
     * Populate status list.
     */

    populateStatusList: function(status) {
      var view = new StatusView({model: status});
      this.$('#status-list').append(view.render().el);
    },

    /**
     * Get status count.
     *
     * @return {Int}
     */

    statusCount: function() {
      return this.statuses.length;
    },

    /**
     * Add status.
     *
     * @param {Object} event
     */

    addStatus: function(event) {
      event.preventDefault();

      var title = this.$el.find('#statusTitle').val().trim();

      if (!title) { return; }

      this.statuses.create({
        statusTitle: title
      });
    }
  });

  return StatusesView;
});