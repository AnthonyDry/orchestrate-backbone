 define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses',
  '../views/issues',
  '../views/issue-form'
], function( $, Backbone, Handlebars, Statuses, IssuesView, IssueFormView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectFullView = Backbone.View.extend({
    template: template('project-full'),
    initialize: function(options) {
      this.render();
    },
    render: function() {
      this.$el.html(this.template(this));

      var issueFormView = new IssueFormView({ el: this.$('#issue-form') });
      issueFormView.render();
      issueFormView.on("newIssue", this.addIssue, this);

      var issuesView = new IssuesView({ el: this.$('#issue-table'), collection: this.model.get('issues') });
      issuesView.render();

      return this;
    },
    title: function() { return this.model.get('title'); },

    addIssue: function(issue) {
      this.model.get('issues').add(issue);
      issue.save();
      this.model.save();
    }
  });

  return ProjectFullView;
});