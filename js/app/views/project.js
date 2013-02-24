 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectView = Backbone.View.extend({
    el: '.hero-unit',
    template: template('project'),
    events: {
      'click .delete-project': 'delete'
    },
    render: function() {
      this.$el.empty();
      this.$el.html(this.template(this));
      return this;
    },
    title: function() { return this.model.get('title'); },
    description: function() { return this.model.get('description'); },
    delete: function() {
      this.model.destroy();
    }
  });

  return ProjectView;
});