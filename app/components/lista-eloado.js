import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        torolEloado(e) {
            e.deleteRecord();
            e.save();
        }
    }
});
