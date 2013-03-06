define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/issues',
  '../views/issue'
], function( $, Backbone, Handlebars, Issues, IssueView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssuesView = Backbone.View.extend({
    template: template('issue'),
    initialize: function(options) {
      this.issues = options.collection;
      this.issues.on('all', this.render, this);
    },
    render: function() {
      this.$el.html(this.template(this));
      this.issues.each(this.populateIssueList, this);
      return this;
    },

    populateIssueList: function(issue) {
      var view = new IssueView({model: issue});
      this.$('#issue-list').append(view.render().el);
    },
    issueCount: function() {
      return this.issues.length;
    }
  });

  return IssuesView;
});