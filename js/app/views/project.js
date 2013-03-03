 define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses',
], function( $, Backbone, Handlebars, Statuses ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectView = Backbone.View.extend({
    template: template('project'),
    initialize: function(options) {
      this.statuses = Statuses;
      this.statuses.on('all', this.render, this);
      this.statuses.fetch();
      this.el = options.el;
    },
    events: {
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    title: function() { return this.model.get('title'); },
    statuses: function() { return this.statuses.toJSON(); }
  });

  return ProjectView;
});