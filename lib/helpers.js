if (Meteor.isClient) {
  Template.registerHelper('nl2br', function(str) {
    var breakTag = '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  });
}
