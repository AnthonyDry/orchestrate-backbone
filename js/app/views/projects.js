define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/projects',
  '../views/project',
  '../views/project-full'
], function( $, Backbone, Handlebars, projects, ProjectView, ProjectFullView ) {

  var ProjectsView = Backbone.View.extend({

    /**
     * Load template and compile handlebars template.
     */

    template: Handlebars.compile($('#project-template').html()),

    /**
     * Initialize `ProjectsView`.
     *
     * @param {Object} options.
     */

    initialize: function() {
      this.projects = projects;
      this.projects.on('all', this.render, this);
      this.ws = $('.workspace');
    },

    /**
     * Bind events.
     */

    events: {
      'click #addproject': 'addProject',
      'click .project': 'showProject'
    },

    /**
     * Render `ProjectsView`.
     */

    render: function() {
      this.$el.html(this.template(this));
      this.projects.each(this.populateProjectList, this);
      return this;
    },

    /**
     * Populate project list.
     */

    populateProjectList: function(project) {
      var view = new ProjectView({model: project});
      this.$('#project-list').append(view.render().el);
    },

    /**
     * Get projects count.
     *
     * @return {Int}
     */

    projectCount: function() {
      return this.projects.length;
    },

    /**
     * Add project.
     *
     * @param {Object} event
     */

    addProject: function(event) {
      event.preventDefault();
      this.projects.create({
        title: this.$('#title').val().trim()
      });
    },

    /**
     * Show project.
     *
     * @param {Object} event
     */

    showProject: function(event) {
      event.preventDefault();
      var id = $(event.currentTarget).data("id");
      var project = this.projects.get(id);

      var projectView = new ProjectFullView({model: project, el: this.ws});
      this.ws.append(projectView.render().el);
    }
  });

  return ProjectsView;
});