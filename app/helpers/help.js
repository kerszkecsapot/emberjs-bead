import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
    var str = params[0];
    return new Ember.Handlebars.SafeString(str.replace(/(<)|(>)/g, '').replace(/(\n)/g, '<br />')); // g -> az összes találatot cserélje
});