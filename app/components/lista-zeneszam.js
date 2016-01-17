import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        torolZeneszam(z) {
            z.deleteRecord();
            z.save();
        }
    }
});
