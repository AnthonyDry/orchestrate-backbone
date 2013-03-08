 define([
  'jquery',
  'backbone',
  'handlebars',
  '../views/issues',
  '../views/issue-form',
  '../collections/issues',
  'underscore'
], function( $, Backbone, Handlebars, IssuesView, IssueFormView, issues, _ ) {

  var ProjectFullView = Backbone.View.extend({
    template: Handlebars.compile($('#project-full-template').html()),
    initialize: function(options) {
    },
    render: function() {
      this.$el.html(this.template(this));

      var issueFormView = new IssueFormView({ el: this.$('#issue-form') });
      issueFormView.render();
      issueFormView.on("newIssue", this.addIssue, this);

      var issuesView = new IssuesView({ el: this.$('#issue-table'), model: this.model });
      issuesView.render();
      issuesView.on("removeIssue", this.removeIssue, this);

      return this;
    },
    title: function() { return this.model.get('title'); },

    addIssue: function(issue) {
      issues.add(issue);
      issue.save();
      this.model.set("issues",this.model.get("issues").concat(issue.id));
      this.model.save();
      
      console.log("ADDED ISSUE",issue,this.model.get("issues"));
    },

    removeIssue: function(issue){
      console.log("REMOVING ISSUE",issue);
      
      var myissues = this.model.get(issues);
      this.model.set("issues",_.without(myissues,issue.id));
      this.model.save();
      issue.destroy();
    }
  });

  return ProjectFullView;
});