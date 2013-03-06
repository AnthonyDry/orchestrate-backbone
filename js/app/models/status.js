define([
  'underscore',
  'backbone',
  '../models/issue',
  '../collections/issues'
], function( _, Backbone, Issue, Issues ) {

  var StatusModel = Backbone.RelationalModel.extend({
    relations: [{
      type: Backbone.HasMany,
      key: 'issues',
      relatedModel: Issue,
      collectionType: Issues,
      reverseRelation: {
        key: 'status',
        includeInJSON: 'id'
      }
    }],
    defaults: {
      statusTitle: 'Title'
    }
  });

  return StatusModel;
});