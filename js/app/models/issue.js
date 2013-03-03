define([
  'underscore',
  'backbone'
], function( _, Backbone ) {

  var IssueModel = Backbone.Model.extend({

    defaults: {
      issueTitle: 'Title',
      issueDescription: 'Description'
    }
  });

  return IssueModel;
});