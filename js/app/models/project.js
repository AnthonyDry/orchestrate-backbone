define([
  'underscore',
  'backbone',
  '../models/issue',
  '../collections/issues'
], function( _, Backbone, Issue, Issues ) {

  var ProjectModel = Backbone.Model.extend({//RelationalModel.extend({
    /*relations: [{
      type: Backbone.HasMany,
      key: 'issues',
      relatedModel: Issue,
      collectionType: Issues,
      reverseRelation: {
        key: 'project',
        includeInJSON: 'id'
      }
    }],*/
    defaults: {
      title: 'Title',
      archived: false,
      issues: []
    },
    toggle: function() {
      this.save({
        archived: !this.get('archived')
      });
    }
  });

  return ProjectModel;
});