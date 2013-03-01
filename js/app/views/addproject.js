 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var AddProjectView = Backbone.View.extend({
    template: template('add-project'),
    initialize: function(options) {
      this.el = options.el,
      this.router = options.router
    },
    events: {
      'submit': 'add'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    add: function(event) {
      event.preventDefault();
      this.collection.create({
        title: this.$('#title').val(),
        description: this.$('#description').val()
      });
      this.router.navigate("", true);
    }
  });

  return AddProjectView;
});