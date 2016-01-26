StudentWorks = new orion.collection('student_works', {
  pluralName: 'work',
  singularName: 'work',
  title: 'Student Work',
  link: {
    title: 'Student Work',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Index' },
      { data: 'description', title: 'Description' },
      orion.attributeColumn('image', 'image', 'Image'),
    ],
  },
});

StudentWorks.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index',
  },
  description: {
    type: String,
    label: 'Description',
  },
  image: orion.attribute('image', {
    label: 'Image',
  }),
  thumb: orion.attribute('image', {
    label: 'Thumbnail',
  }),
  createdAt: orion.attribute('createdAt'),
}));
