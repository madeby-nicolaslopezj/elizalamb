Template.educatorLayout.onCreated(function() {
  this.subscribe('abouts');
});

Template.educatorLayout.helpers({
  abouts: function() {
    return Abouts.find({}, { sort: { index: 1 } });
  },

  getAboutPath: function() {
    return Router.path('educator.about.item', this);
  },
});
