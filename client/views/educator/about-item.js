Template.educatorAboutItem.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('abouts.item', Router.current().params.url);
  });
});

Template.educatorAboutItem.helpers({
  item: function() {
    return Abouts.findOne({ url: Router.current().params.url });
  },
});
