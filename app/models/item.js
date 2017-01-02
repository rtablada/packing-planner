import DS from 'ember-data';

export default DS.Model.extend({
  trip: DS.belongsTo('trip'),
  name: DS.attr('string'),
  ownBox: DS.attr('boolean'),
  room: DS.attr('string')
});
