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

  var IssueCollectionView = Backbone.View.extend({
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
      var view = new IssueListView({model: issue});
      this.$('#issue-list').append(view.render().el);
    },
    issueCount: function() {
      return this.issues.length;
    }
  });

  return IssueCollectionView;
});