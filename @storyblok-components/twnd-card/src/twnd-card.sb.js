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
    box_model: {
      type: 'custom',
      description: 'Spacing plugin',
      field_type: 'sbp-spacing-plugin',
      options: [],
    },
    spacing: {
      type: 'tab',
      display_name: 'Spacing',
      keys: ['box_model'],
    },
  },
};
