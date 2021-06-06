module.exports = {
  name: 'twnd-container',
  display_name: 'Tailwind Container',
  component_group_name: 'Tailwind',
  is_root: false,
  is_nestable: true,
  schema: {
    content: {
      type: 'bloks',
      translatable: false,
    },
    center: {
      type: 'boolean',
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
