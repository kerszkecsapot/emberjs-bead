import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        ujEloado(formData) {
            var eloado = this.store.createRecord('eloado', 
                Object.assign({
                    nev: 'nev'
                }, 
                formData
                )
            );
            eloado.save();
            this.transitionToRoute('eloado', eloado);
        }
    }
});
