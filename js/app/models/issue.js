define([
  'underscore',
  'backbone'
], function( _, Backbone ) {

  var IssueModel = Backbone.RelationalModel.extend({
  	url: "/",
    defaults: {
      issueTitle: 'Title',
      issueDescription: 'Description'
    }
  });

  return IssueModel;
});