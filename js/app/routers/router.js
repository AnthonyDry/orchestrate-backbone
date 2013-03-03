define([
  'jquery',
  'backbone',
  '../collections/projects',
  '../views/app',
  '../views/status'
], function( $, Backbone, Projects, AppView, StatusView ) {

  var Router = Backbone.Router.extend({
    initialize: function(options) {
      this.el = options.el,
      this.status = $('#statuses')
    },
    routes: {
      "" : "index"
    },
    index: function() {
      var appView = new AppView();
      this.el.empty();
      this.el.append(appView.render().el);
      
      var statusView = new StatusView({el: this.status});
      this.status.empty();
      this.status.append(statusView.render().status);
    }
  });

  return Router;
});