 define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses'
], function( $, Backbone, Handlebars, Statuses ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssueListView = Backbone.View.extend({
    template: template('issue-list'),
    initialize: function(options) {
      this.statuses = Statuses;
      this.statuses.on('all', this.render, this);
      this.statuses.fetch();
    },
    events: {
      'click .delete-issue': 'delete'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    issueTitle: function() { return this.model.get('issueTitle'); },
    issueDescription: function () { return this.model.get('issueDescription'); },
    statuses: function() { return this.statuses.toJSON(); },

    delete: function() {
      this.model.destroy();
    }
  });

  return IssueListView;
});