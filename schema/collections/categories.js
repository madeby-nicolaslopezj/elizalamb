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
    label: 'path',
    unique: true,
  },
  createdAt: orion.attribute('createdAt'),
}));
