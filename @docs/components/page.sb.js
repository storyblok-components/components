module.exports = {
  name: 'page',
  display_name: 'Page',
  is_root: true,
  is_nestable: false,
  component_group_name: 'Content type',
  schema: {
    body: {
      type: 'bloks',
      pos: 0,
      restrict_components: false,
    },
    featured_image: {
      type: 'custom',
      required: false,
      pos: 1,
      field_type: 'focus-point',
      options: [],
      description: 'Shown in other pages and social media',
    },
    transparent_header: {
      type: 'boolean',
    },
    settings: {
      type: 'tab',
      display_name: 'Settings',
      keys: ['transparent_header'],
    },
  },
};
