define([
  'jquery',
  'backbone',
  '../views/app',
  '../views/project'
], function( $, Backbone, AppView, ProjectView ) {

  var Router = Backbone.Router.extend({
    initialize: function(options) {
      this.el = options.el
    },
    routes: {
      "" : "index",
      "project/:id" : "project"
    },
    index: function() {
      var app = new AppView();
      this.el.empty();
      this.el.append(app.render().el);
    },
    project: function() {
      this.index();
      var view = new ProjectView();
    }
  });

  return Router;
});