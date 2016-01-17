import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        szerkesztZeneszam(formData) {
            let zeneszam = this.get('model');
            this.store.findRecord('eloado', formData.eloado).then(function(e) {
                zeneszam.setProperties({ cim: formData.cim, dalszoveg: formData.dalszoveg, eloado: e});
                zeneszam.save();
            });
            
            zeneszam.save();
            this.transitionToRoute('zene', zeneszam);
            
        }
    }
});
