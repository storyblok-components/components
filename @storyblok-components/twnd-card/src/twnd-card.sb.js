module.exports = {
  name: 'twnd-card',
  display_name: 'Tailwind Card',
  component_group_name: 'Tailwind',
  is_root: false,
  is_nestable: true,
  schema: {
    image: {
      type: 'custom',
      required: true,
      translatable: true,
      display_name: '',
      field_type: 'focus-point',
      options: [],
    },
    heading: {
      type: 'text',
    },
    content: {
      type: 'textarea',
    },
  },
};
