Meteor.publish('student_works', function() {
  return StudentWorks.find();
});
