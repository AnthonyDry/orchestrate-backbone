define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/projects',
  '../views/projectlist',
  '../views/project'
], function( $, Backbone, Handlebars, Projects, ProjectListView, ProjectView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var AppView = Backbone.View.extend({
    template: template('app'),
    initialize: function() {
      this.projects = Projects;
      this.projects.on('all', this.render, this);
      this.projects.fetch();
      this.ws = $('.workspace');
    },
    events: {
      'click #addproject': 'addProject',
      'click .project': 'showProject'
    },
    render: function() {
      this.$el.html(this.template(this));
      this.projects.each(this.populateProjectList, this);
      return this;
    },
    
    populateProjectList: function(project) {
      var view = new ProjectListView({model: project});
      this.$('#project-list').append(view.render().el);
    },
    projectCount: function() {
      return this.projects.length;
    },
    addProject: function(event) {
      event.preventDefault();
      this.projects.create({
        title: this.$('#title').val().trim()
      });
    },
    showProject: function(event) {
      event.preventDefault();
      var id = $(event.currentTarget).data("id");
      var project = this.projects.get(id);
      var projectView = new ProjectView({model: project, el: this.ws});
      this.ws.append(projectView.render());
    }
  });

  return AppView;
});