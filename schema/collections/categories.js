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
      { data: 'url', title: 'Path' },
      { data: 'isHidden', title: 'Hidden', render: (val) => val ? 'Yes' : 'No' },
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
    optional: true,
    autoform: {
      type: 'textarea',
    },
  },
  statementImage: orion.attribute('image', {
    label: 'Statement thumbnail',
    optional: true,
  }),
  isHidden: {
    type: Boolean,
    label: 'Hidden',
  },
  createdAt: orion.attribute('createdAt'),
}));
