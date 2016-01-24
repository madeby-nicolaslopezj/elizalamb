Categories = new orion.collection('categories', {
  pluralName: 'categories',
  singularName: 'category',
  title: 'Categories',
  link: {
    title: 'Categories',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Index' },
      { data: 'name', title: 'Name' },
      { data: 'path', title: 'Path' },
    ],
  },
});

Categories.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index',
  },
  name: {
    type: String,
    label: 'Name',
  },
  url: {
    type: String,
    label: 'Path',
    unique: true,
  },
  statement: {
    type: String,
    label: 'Statement',
    autoform: {
      type: 'textarea',
    },
  },
  statementImage: orion.attribute('image', {
    label: 'Statement thumbnail',
  }),
  createdAt: orion.attribute('createdAt'),
}));
