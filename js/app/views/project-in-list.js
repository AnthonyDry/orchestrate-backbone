 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectListView = Backbone.View.extend({
    template: template('project-list'),
    
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

  return ProjectListView;
});