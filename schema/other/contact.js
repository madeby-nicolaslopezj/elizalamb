ContactSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 50,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Email',
  },
  message: {
    type: String,
    label: 'Message',
    max: 1000,
  },
});
