import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adat-zeneszam', 'Integration | Component | adat zeneszam', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{adat-zeneszam}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#adat-zeneszam}}
      template block text
    {{/adat-zeneszam}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
