import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        ujZeneszam(formData) {
            
            var z = this.store.createRecord('zeneszam', Object.assign( { cim: 'cim', dalszoveg: 'dalszoveg'}, formData));
            
            this.store.findRecord('eloado', formData.eloado).then(function(found) {
                z.set('eloado', found);
                z.save();
            });
            
            this.transitionToRoute('zene', z);
            
        }
    }
});
