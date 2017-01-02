import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.attr('integer'),
  title: DS.attr('string'),
  completeDate: DS.attr('date'),
  help: DS.attr('boolean'),
  items: DS.hasMany('item')
});
