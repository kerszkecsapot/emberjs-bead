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
                cim: this.$('#cim').val(),
                eloado: this.$('#eloado').val(),
                dalszoveg: this.$('#dalszoveg').val()
            });
        }
    },
    
    ellenorzes() {
        var cim = this.$('#cim').val();
        var dalszoveg = this.$('#dalszoveg').val();
        
        this.set('hibak.cim', cim === '' ? 'Cím kötelező!' : '');
        this.set('hibak.dalszoveg', dalszoveg === '' ? 'Dalszöveg kötelező!' : '');
        
        return this.get('hibak.cim') === '' && this.get('hibak.dalszoveg') === '';
    }
});