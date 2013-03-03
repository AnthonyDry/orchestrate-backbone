define([
  'underscore',
  'backbone',
  'backboneLocalstorage',
  '../models/issue'
], function( _, Backbone, Store, Issue ) {

  var IssuesCollection = Backbone.Collection.extend({
    model: Issue,
    localStorage: new Store('issues-backbone')
  });

  return new IssuesCollection();
});