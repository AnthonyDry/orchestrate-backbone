 define([
  'jquery',
  'backbone',
  'handlebars'
], function( $, Backbone, Handlebars ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssueListView = Backbone.View.extend({
    tagName: 'tr',
    template: template('issue-list'),
    events: {
      'click .delete-issue': 'delete'
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    issueTitle: function() { return this.model.get('issueTitle'); },
    issueDescription: function () { return this.model.get('issueDescription'); },

    delete: function() {
      this.model.destroy();
    }
  });

  return IssueListView;
});