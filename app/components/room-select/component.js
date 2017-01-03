import Ember from 'ember';

export default Ember.Component.extend({
  lookupRoomSuggestions(name) {
    const q = name.toLowerCase();

    this.set('suggestions', this.get('rooms').filter((room) => {
      const roomName = room.get('name').toLowerCase();

      return roomName.includes(q);
    }));
  },

  actions: {
    lookupRooms(ev) {
      const value = ev.target.value;

      this.lookupRoomSuggestions(value);

      this.get('onchange')(value);
    },

    selectRoom(room) {
      this.get('onchange')(room.get('name'));
      this.set('name', room.get('name'));

      this.set('suggestions', []);
    }
  }
});
