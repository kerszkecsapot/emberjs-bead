import Ember from 'ember';

export default Ember.Component.extend({
    hibak: Ember.Object.create(),
    
    actions: {
        submit() {
            // form elküldése utána ha hiba van visszatér
            if (!this.ellenorzes()) {
                return;
            }
            
            // ha nincs hiba onSave meghívása "nev" paraméterrel
            this.get('onSave')({
                nev: this.$('#nev').val()
            });
        }
    },
    
    ellenorzes() {
        var nev = this.$('#nev').val();
        this.set('hibak.nev', nev === '' ? 'Név kötelező!' : '');
        
        return this.get('hibak.nev') === '';
    }
});