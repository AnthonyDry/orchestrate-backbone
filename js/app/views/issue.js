 define([
  'jquery',
  'backbone',
  'handlebars',
  '../collections/statuses'
], function( $, Backbone, Handlebars, statuses ) {

  var template = function(name) {
    return Handlebars.compile($('#'+name+'-template').html());
  };

  var IssueListView = Backbone.View.extend({
    tagName: 'tr',
    template: template('issue-list'),
    events: {
      'click .delete-issue': 'delete'
    },
    initialize: function(){
      this.listenTo(statuses,"remove",this.render,this);
    },
    render: function() {
      this.$el.html(this.template(this));
      return this;
    },
    
    issueTitle: function() { return this.model.get('issueTitle'); },
    issueDescription: function () { return this.model.get('issueDescription'); },
    // status: function() { return this.model.fetchRelated('status'); },

    delete: function() {
      this.trigger("removeIssue",this.model);
      //this.model.destroy();
    }
  });

  return IssueListView;
});