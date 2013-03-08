define([
  'backbone',
  '../models/status'
], function( Backbone, Status ) {

  var StatusesCollection = Backbone.Collection.extend({
    model: Status,
    localStorage: new Backbone.LocalStorage('statuses-backbone'),
    initialize: function(){
      this.fetch();
    }
  });

  return new StatusesCollection();
});