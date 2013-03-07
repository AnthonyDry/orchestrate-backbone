define([
  'jquery',
  'backbone',
  'handlebars',
  '../models/issue',
  '../collections/statuses'
], function( $, Backbone, Handlebars, Issue, Statuses ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssueFormView = Backbone.View.extend({
    template: template('issue-form'),
    initialize: function(options) {
      this.statuses = new Statuses();
      this.statuses.fetch();
      console.log(this.statuses.toJSON());
    },
    events: {
      'click #addissue': 'createIssue'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },

    statuses: function() { return this.statuses.toJSON(); },

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