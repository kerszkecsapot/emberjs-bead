import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('uj-e');
  this.route('uj-z');
  this.route('szerkeszt-eloado', {path: '/szerkeszt-eloado/:eloado_id'});
  this.route('eloado', {path: '/eloado/:eloado_id'});
  this.route('zene', {path: '/zene/:zeneszam_id'});
  this.route('szerkeszt-zeneszam', {path: '/szerkeszt-zeneszam/:zeneszam_id'});
  this.route('rosszurl', { path: '/*rosszurl' });
});

export default Router;
