define([
  'backbone',
  '../models/status'
], function( Backbone, Status ) {

  var StatusesCollection = Backbone.Collection.extend({

    /**
     * Set model to `Status`.
     */

    model: Status,

    /**
     * Add localStorage support.
     */

    localStorage: new Backbone.LocalStorage('statuses-backbone'),

    /**
     * Initalize and fetch data.
     */

    initialize: function(){
      this.fetch();
    }
  });

  return new StatusesCollection();
});