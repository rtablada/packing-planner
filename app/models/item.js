import DS from 'ember-data';

export default DS.Model.extend({
  trip: DS.belongsTo('trip'),
  room: DS.belongsTo('room'),
  name: DS.attr('string'),
  ownBox: DS.attr('boolean'),
  roomName: DS.attr('string')
});
