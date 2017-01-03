import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rooms: this.store.findAll('room'),
      trip: this._super(...arguments),
    });
  },

  setupController(controller, { trip, rooms }) {
    controller.set('model', trip);
    controller.set('rooms', rooms);
  }
});
