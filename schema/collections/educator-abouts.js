Abouts = new orion.collection('abouts', {
  pluralName: 'educator about links',
  singularName: 'educator about link',
  title: 'Educator About Links',
  link: {
    title: 'Educator About Links',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Index' },
      { data: 'name', title: 'Name' },
      { data: 'url', title: 'Path' },
    ],
  },
});

Abouts.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index',
  },
  name: {
    type: String,
    label: 'Name',
  },
  pdf: orion.attribute('file', {
    label: 'PDF',
    optional: true,
  }),
  url: {
    type: String,
    label: 'Path',
    optional: true,
  },
  text: orion.attribute('summernote', {
    label: 'Text',
    optional: true,
  }),
  createdAt: orion.attribute('createdAt'),
}));
