import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$('.animdiv').css('color', 'red').slideDown();
  },

  didRender: function() {
    this.$('.animdiv').slideUp();
  },

});
