 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var StatusView = Backbone.View.extend({
    template: Handlebars.compile($('#status-list-template').html()),
    
    events: {
      'click .delete-status': 'delete'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    statusTitle: function() { return this.model.get('statusTitle'); },
    id: function () { return this.model.get('id'); },

    delete: function() {
      this.model.destroy();
    }
  });

  return StatusView;
});