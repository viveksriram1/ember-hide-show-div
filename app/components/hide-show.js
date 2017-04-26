import Ember from 'ember';

export default Ember.Component.extend({
isShowing: false,
showDiv:false,
actions: {

  showDiv: function(){
    this.toggleProperty('showDiv');
  },

  show() {
    this.set('isShowing', true);
  },

  hide() {
    this.set('isShowing', false);
  }
}
});
