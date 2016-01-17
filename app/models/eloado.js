import DS from 'ember-data';

export default DS.Model.extend({
    nev: DS.attr('string'),
    zeneszamok: DS.hasMany('zeneszam', { async: true }),
    zdb: DS.attr('number', { defaultValue: 0 })
});