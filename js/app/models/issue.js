define([
  'underscore',
  'backbone'
], function( _, Backbone ) {

  var IssueModel = Backbone.Model.extend({

  	url: "/",

  	/**
  	 * Default values.
  	 */

    defaults: {
      issueTitle: 'Title',
      issueDescription: 'Description'
    }
  });

  return IssueModel;
});