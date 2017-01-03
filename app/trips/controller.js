import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeTrip(trip, item) {
      item.set('trip', trip);
      item.save();
    }
  }
});
