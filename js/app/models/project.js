define([
  'underscore',
  'backbone'
], function( _, Backbone ) {

  var ProjectModel = Backbone.Model.extend({

    defaults: {
      title: '',
      description: '',
      archived: false
    },
    toggle: function() {
      this.save({
        archived: !this.get('archived')
      });
    }
  });

  return ProjectModel;
});