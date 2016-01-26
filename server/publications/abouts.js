Meteor.publish('abouts', function() {
  return Abouts.find({}, { fields: { text: 0 } });
});

Meteor.publish('abouts.item', function(url) {
  check(url, String);
  return Abouts.find({ url: url });
});
