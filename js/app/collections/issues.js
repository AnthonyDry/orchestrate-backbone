define([
  'backbone',
  '../models/issue'
], function( Backbone, Issue ) {

  var IssuesCollection = Backbone.Collection.extend({
    model: Issue,
    localStorage: new Backbone.LocalStorage('issues-backbone')
  });

  return IssuesCollection;
});