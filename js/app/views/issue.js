define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/issues',
  '../views/issue-in-list'
], function( $, Backbone, Handlebars, Issues, IssueListView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssueView = Backbone.View.extend({
    template: template('issue'),
    initialize: function(options) {
      this.issues = options.collection;
    },
    events: {
      'click #addissue': 'addIssue'
    },
    render: function() {
      this.$el.html(this.template(this));
      this.issues.each(this.populateIssueList, this);
      console.log(this);
      return this;
    },

    populateIssueList: function(issue) {
      var view = new IssueListView({model: issue});
      this.$('#issue-list').append(view.render());
    },
    issueCount: function() {
      return this.issues.length;
    },
    addIssue: function(event) {
      event.preventDefault();
      this.issues.create({
        issueTitle: this.$('#issueTitle').val().trim(),
        issueDescription: this.$('#issueDescription').val().trim()
      });
    }
  });

  return IssueView;
});