 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectView = Backbone.View.extend({
    template: template('project'),
    initialize: function(options) {
      this.el = options.el;
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    title: function() { return this.model.get('title'); }
  });

  return ProjectView;
});