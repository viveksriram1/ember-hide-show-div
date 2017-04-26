import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    profileShow() {
      this.set('isShowing', true);
    },

    profileHide() {
      this.set('isShowing', false);
    },
  }
});
