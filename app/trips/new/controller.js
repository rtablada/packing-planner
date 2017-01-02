import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  actions: {
    saveTrip(formInputs, reset) {
      const data = {
        ...formInputs,
        completeDate: moment(formInputs.completeDate, 'YYYY-MM-DD'),
      }
      const trip = this.store.createRecord('trip', data);

      trip.save()
        .then(() => {
          this.transitionToRoute('trips.index');
        });
    },
  },
});
