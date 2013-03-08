define([
  'jquery',
  'backbone',
  'handlebars',
  '../models/issue',
  '../collections/statuses'
], function( $, Backbone, Handlebars, Issue, statuses ) {

  var IssueFormView = Backbone.View.extend({
    template: Handlebars.compile($('#issue-form-template').html()),
    initialize: function(options) {
      this.statuses = statuses;
      this.listenTo(statuses,"all",this.render,this); // listen to if statuses are updated
      this.statuslist = this.statuses.toJSON(); // to populate the select
    },
    events: {
      'click #addissue': 'createIssue'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },

    // Handled in the ProjectFullView
    createIssue: function(event) {
      event.preventDefault();
      var issue = new Issue({
        issueTitle: this.$('#issueTitle').val().trim(),
        issueDescription: this.$('#issueDescription').val().trim(),
        status: this.$('#all-statuses option:selected').data("status-id")
      });
      this.trigger("newIssue", issue);
    }
  });

  return IssueFormView;
});