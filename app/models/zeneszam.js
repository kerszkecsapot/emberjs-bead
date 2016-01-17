import DS from 'ember-data';

export default DS.Model.extend({
    cim: DS.attr('string'),
    eloado: DS.belongsTo('eloado', { async: true }),
    dalszoveg: DS.attr('string')
});