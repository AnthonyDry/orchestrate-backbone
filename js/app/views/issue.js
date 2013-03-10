 define([
  'underscore',
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses'
], function( _, $, Backbone, Handlebars, statuses ) {

  var IssueView = Backbone.View.extend({
    tagName: 'tr',

    /**
     * Load template and compile handlebars template.
     */

    template: Handlebars.compile($('#issue-list-template').html()),

    /**
     * Bind events.
     */

    events: {
      'click .delete-issue': 'delete'
    },

    /**
     * Initialize `IssueView`.
     */

    initialize: function(){
      this.listenTo(statuses,"remove",this.render,this);
    },

    /**
     * Render `IssueView`.
     */

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

    /**
     * Get issue title.
     *
     * @return {String}
     */

    issueTitle: function() { return this.model.get('issueTitle'); },

    /**
     * Get issue description.
     *
     * @return {String}
     */

    issueDescription: function () { return this.model.get('issueDescription'); },

    // Handled in the ProjectFullView

    /**
     * Delete issue.
     */

    delete: function() {
      this.trigger("removeIssue",this.model);
    }
  });

  return IssueView;
});