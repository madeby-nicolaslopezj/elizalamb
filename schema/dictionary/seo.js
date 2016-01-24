orion.dictionary.addDefinition('title', 'seo', {
  type: String,
  label: 'Page title',
});

orion.dictionary.addDefinition('description', 'seo', {
  type: String,
  label: 'Page description',
  optional: true,
  autoform: {
    type: 'textarea',
  },
});

orion.dictionary.addDefinition('image', 'seo',
	orion.attribute('image', {
    label: 'Image',
    optional: true,
  })
);

orion.dictionary.addDefinition('favicon', 'seo',
	orion.attribute('image', {
    label: 'Fav Icon',
    optional: true,
  })
);
