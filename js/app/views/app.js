define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/projects',
  '../views/projectlist',
  '../views/addproject'
], function( $, Backbone, Handlebars, Projects, ProjectListView, AddProjectView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var AppView = Backbone.View.extend({
    template: template('app'),
    initialize: function() {
      this.projects = Projects;
      this.projects.on('all', this.render, this);
      this.projects.fetch();
    },
    events: {
      'click .add': 'showForm'
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
    count: function() {
      return this.projects.length;
    },
    showForm: function () {
      var view = new AddProjectView({collection: this.projects});
      $('#showform').replaceWith( view.render().el );
      this.render();
    }
  });

  return AppView;
});