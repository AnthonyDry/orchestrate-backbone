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

    /**
     * Load template and compile handlebars template.
     */

    template: Handlebars.compile($('#project-full-template').html()),

    /**
     * Render `ProjectFullView`.
     */

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

    /**
     * Get project title.
     *
     * @return {String}
     */

    title: function() { return this.model.get('title'); },

    /**
     * Add issue.
     *
     * @param {Object} issue
     */

    addIssue: function(issue) {
      issues.add(issue);
      issue.save();
      console.log(issue);
      this.model.set("issues",this.model.get("issues").concat(issue.id));
      this.model.save();

      console.log("ADDED ISSUE",issue,this.model.get("issues"));
    },

    /**
     * Remove issue.
     *
     * @param {Object} issue
     */

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