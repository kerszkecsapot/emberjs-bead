import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        szerkesztEloado(formData) {
            let eloado = this.get('model');
            eloado.setProperties(formData);
            return eloado.save().then(() => {
                this.transitionToRoute('eloado', eloado);
            });
        }
    }
});
