define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/projects',
  '../views/project-in-list',
  '../views/project-full'
], function( $, Backbone, Handlebars, Projects, ProjectListView, ProjectFullView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectView = Backbone.View.extend({
    template: template('project'),
    initialize: function() {
      this.projects = new Projects();
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
      
      var projectView = new ProjectFullView({model: project, el: this.ws});
      this.ws.append(projectView.render().el);
    }
  });

  return ProjectView;
});