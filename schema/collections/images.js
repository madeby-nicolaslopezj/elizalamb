Images = new orion.collection('images', {
  pluralName: 'images',
  singularName: 'image',
  title: 'Images',
  link: {
    title: 'Images',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Index' },
      { data: 'description', title: 'Description' },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('hasOne', 'categoryId', 'Category'),
    ],
  },
});

Images.attachSchema(new SimpleSchema({
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
  categoryId: orion.attribute('hasOne', {
    label: 'Category',
  }, {
    collection: Categories,
    titleField: 'name',
    publicationName: 'images_categoryId_schema',
  }),
  createdAt: orion.attribute('createdAt'),
}));
