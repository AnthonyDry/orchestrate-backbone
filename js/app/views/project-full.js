 define([
  'jquery',
  'backbone',
  'handlebars',
  '../views/issue'
], function( $, Backbone, Handlebars, IssueView ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var ProjectView = Backbone.View.extend({
    template: template('project-full'),
    initialize: function(options) {
      this.render();
    },
    render: function() {
      this.$el.html(this.template(this));
      var myIssues = this.model.get('issues');
      var issueView = new IssueView({ el: this.$('#issue-table'), collection: myIssues });
      issueView.render();
      return this;
    },
    title: function() { return this.model.get('title'); }
  });

  return ProjectView;
});