 define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/projects',
], function( $, Backbone, Handlebars, Projects ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectView = Backbone.View.extend({
    el: $('.hero-unit'),
    template: template('project'),
    initialize: function(options) {
      this.el = options.el,
      this.router = options.router
    },
    events: {
      'click .delete-project': 'delete'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    title: function() { return this.model.get('title'); },
    description: function() { return this.model.get('description'); },
    
    delete: function() {
      this.model.destroy();
      this.router.navigate("/project/deleted", true);
    }
  });

  return ProjectView;
});