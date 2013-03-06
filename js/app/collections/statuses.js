define([
  'backbone',
  '../models/status'
], function( Backbone, Status ) {

  var StatusesCollection = Backbone.Collection.extend({
    model: Status,
    localStorage: new Backbone.localStorage('statuses-backbone')
  });

  return new StatusesCollection();
});