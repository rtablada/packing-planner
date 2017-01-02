import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.attr('number'),
  title: DS.attr('string'),
  completeDate: DS.attr('moment-utc'),
  help: DS.attr('boolean'),
  items: DS.hasMany('item')
});
