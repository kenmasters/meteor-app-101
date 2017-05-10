// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

Meteor.publish('links.all', function () {
  return Links.find();
}, {
  url: "links"
});

Meteor.publish('links.id', function (id) {
  return Links.find({_id: id});
}, {
  url: "links/:0"
});
