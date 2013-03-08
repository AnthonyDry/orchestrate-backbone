define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses',
  '../views/status'
], function( $, Backbone, Handlebars, statuses, StatusView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var StatusesView = Backbone.View.extend({
    template: template('status'),
    initialize: function() {
      this.statuses = statuses;
      this.statuses.on('all', this.render, this);
    },
    events: {
      'click #addstatus': 'addStatus'
    },
    render: function() {
      this.$el.html(this.template(this));
      this.statuses.each(this.populateStatusList, this);
      return this;
    },

    populateStatusList: function(status) {
      var view = new StatusView({model: status});
      this.$('#status-list').append(view.render().el);
    },
    statusCount: function() {
      return this.statuses.length;
    },
    addStatus: function(event) {
      event.preventDefault();
      this.statuses.create({
        statusTitle: this.$('#statusTitle').val().trim()
      });
    }
  });

  return StatusesView;
});