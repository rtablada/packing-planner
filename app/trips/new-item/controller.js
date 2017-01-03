import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  actions: {
    saveItem(trip, formInputs, reset) {
      const data = {
        trip,
        ...formInputs,
      }
      const item = this.store.createRecord('item', data);

      item.save()
        .then(() => {
          this.transitionToRoute('trips.index');
        });
    },
  },
});
