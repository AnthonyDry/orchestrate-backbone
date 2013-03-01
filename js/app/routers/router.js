define([
  'jquery',
  'backbone',
  '../collections/projects',
  '../views/app',
  '../views/project',
  '../views/addproject'
], function( $, Backbone, Projects, AppView, ProjectView, AddProjectView ) {

  var Router = Backbone.Router.extend({
    initialize: function(options) {
      this.el = options.el,
      this.projectform = $('#add-project-form'),
      this.hero = $('.hero-unit')
    },
    routes: {
      "" : "index",
      "project/add" : "add",
      "project/deleted" : "deleted",
      "project/:id" : "project"
    },
    index: function() {
      var appView = new AppView();
      this.el.empty();
      this.hero.empty().append('<h2>Orchestrate issue tracker</h2>');
      this.projectform.empty();
      this.el.append(appView.render().el);
    },
    add: function() {
      this.index();
      var addProjectView = new AddProjectView({collection: Projects, el: this.projectform, router: this});
      this.projectform.append(addProjectView.render().projectform);
    },
    deleted: function() {
      this.index();
      this.hero.empty().append('<h2>The project was successfully deleted</h2>');
    },
    project: function(id) {
      this.index();
      var project = Projects.get(id);
      var projectView = new ProjectView({model: project, el: this.hero, router: this});
      this.hero.append(projectView.render().hero);
    }
  });

  return Router;
});