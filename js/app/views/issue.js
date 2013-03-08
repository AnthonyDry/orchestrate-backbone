 define([
  'underscore',
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses'
], function( _, $, Backbone, Handlebars, statuses ) {

  var IssueView = Backbone.View.extend({
    tagName: 'tr',
    template: Handlebars.compile($('#issue-list-template').html()),
    events: {
      'click .delete-issue': 'delete'
    },
    initialize: function(){
      this.listenTo(statuses,"remove",this.render,this);
    },
    render: function() {
      var statusId = this.model.get('status');
      var statusModel = statuses.get(statusId);
      if (statusModel) {
        this.status = statusModel.get("statusTitle");
      } else {
        this.status = "Unknown";
      }

      this.$el.html(this.template(this));
      return this;
    },
    
    // Helpers for Handelbars
    issueTitle: function() { return this.model.get('issueTitle'); },
    issueDescription: function () { return this.model.get('issueDescription'); },

    // Handled in the ProjectFullView
    delete: function() {
      this.trigger("removeIssue",this.model);
    }
  });

  return IssueView;
});