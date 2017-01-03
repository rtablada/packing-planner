import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('trips', { path: '/' }, function() {
    this.route('new');
    this.route('new-item', { path: '/:trip_id/new-item'});
  });
});

export default Router;
