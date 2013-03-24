define([
  'jquery',
  'backbone',
  'handlebars',
  '../models/issue',
  '../collections/statuses'
], function( $, Backbone, Handlebars, Issue, statuses ) {

  var IssueFormView = Backbone.View.extend({

    /**
     * Load template and compile handlebar template.
     */

    template: Handlebars.compile($('#issue-form-template').html()),

    /**
     * Initialize
     *
     * @param {Object} options
     */

    initialize: function(options) {
      this.statuses = statuses;
      this.listenTo(statuses,"all",this.render,this); // listen to if statuses are updated
    },

    /**
     * Bind events.
     */

    events: {
      'click #addissue': 'createIssue'
    },

    /**
     * Render issue form.
     */

    render: function() {
      this.statuslist = this.statuses.toJSON(); // to populate the select
      this.$el.html(this.template(this));
      return this;
    },

    // Handled in the ProjectFullView

    /**
     * Create issue.
     *
     * @param {Object} event
     */

    createIssue: function(event) {
      event.preventDefault();
      var title = this.$el.find('#issueTitle').val().trim();
      var desc = this.$el.find('#issueDescription').val().trim();
      
      if (title == "" && desc == "") { return; }

      var issue = new Issue({
        issueTitle: title,
        issueDescription: desc,
        status: this.$('#all-statuses option:selected').data("status-id")
      });

      this.trigger("newIssue", issue);
    }
  });

  return IssueFormView;
});