define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/projects',
  '../views/projectlist'
], function( $, Backbone, Handlebars, Projects, ProjectListView ) {

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
    }
  });

  return AppView;
});