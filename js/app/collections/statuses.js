define([
  'underscore',
  'backbone',
  'backboneLocalstorage',
  '../models/status'
], function( _, Backbone, Store, Status ) {

  var StatusesCollection = Backbone.Collection.extend({
    model: Status,
    localStorage: new Store('statuses-backbone')
  });

  return new StatusesCollection();
});