define([
  'jquery',
  'backbone',
  'handlebars',
  '../models/issue'
], function( $, Backbone, Handlebars, Issue ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssueFormView = Backbone.View.extend({
    template: template('issue-form'),
    initialize: function(options) {
    },
    events: {
      'click #addissue': 'createIssue'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    createIssue: function(event) {
      event.preventDefault();
      var issue = new Issue({
        issueTitle: this.$('#issueTitle').val().trim(),
        issueDescription: this.$('#issueDescription').val().trim()
      });
      this.trigger("newIssue", issue);
    }
  });

  return IssueFormView;
});