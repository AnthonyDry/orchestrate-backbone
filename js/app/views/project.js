 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var ProjectView = Backbone.View.extend({
    template: Handlebars.compile($('#project-list-template').html()),
    
    events: {
      'click .delete-project': 'delete'
    },
    
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    title: function() { return this.model.get('title'); },
    id: function () { return this.model.get('id'); },

    delete: function() {
      this.model.destroy();
    }
  });

  return ProjectView;
});