define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/issues',
  '../views/issue',
  "underscore"
], function( $, Backbone, Handlebars, issues, IssueView, _ ) {

  var IssuesView = Backbone.View.extend({

    /**
     * Load template and compile handlebars template.
     */

    template: Handlebars.compile($('#issue-template').html()),

    /**
     * Initialize `IssuesView`.
     *
     * @param {Object} options.
     */

    initialize: function(options) {
      this.listenTo(this.model,"change:issues",this.render,this);
    },

    /**
     * Render `IssuesView`.
     */

    render: function() {
      this.$el.html(this.template(this));

      var myissues = issues.filter(function(issue){
        return _.contains(this.model.get("issues"),issue.id);
      },this);
      _.each(myissues, this.populateIssueList, this);

      console.log("RENDERING ISSUES",issues.length,this.model.id,"myissues",this.model.get("issues"));

      return this;
    },

    /**
     * Populate issue list.
     */

    populateIssueList: function(issue) {
      var view = new IssueView({model: issue});
      this.$('#issue-list').append(view.render().el);
      this.listenTo(view,"removeIssue",function(issue){
        this.trigger("removeIssue",issue);
      },this);
      
    },

    /**
     * Get issues count.
     *
     * @return {Int}
     */

    issueCount: function() {
      return this.issues.length;
    }
  });

  return IssuesView;
});