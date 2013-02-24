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
      'click .close': 'delete'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    title: function() { return this.model.get('title');        },
    description: function() { return this.model.get('description'); },
    delete: function() {
      this.model.destroy();
    }
  });

  return ProjectListView;
});