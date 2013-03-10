define([
  'backbone',
  '../models/issue'
], function( Backbone, Issue ) {

  var IssuesCollection = Backbone.Collection.extend({

    /**
     * Set model to `Issue`.
     */

    model: Issue,

    /**
     * Add localStorage support.
     */

    localStorage: new Backbone.LocalStorage('issues-backbone'),

    /**
     * Initalize and fetch data.
     */

    initialize: function(){
      this.fetch();
    }
  });

  return new IssuesCollection();
});