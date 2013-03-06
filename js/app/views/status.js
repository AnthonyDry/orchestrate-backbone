 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var StatusView = Backbone.View.extend({
    template: template('status-list'),
    
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