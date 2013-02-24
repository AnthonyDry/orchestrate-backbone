 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var AddProjectView = Backbone.View.extend({
    tagName: 'form',
    className: 'projectform',
    template: template('add-project'),
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
      $('.projectform').replaceWith("<div id='showform'></div>");
      this.render();

    }
  });

  return AddProjectView;
});