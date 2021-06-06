module.exports = {
  name: 'twnd-flex',
  display_name: 'Tailwind Flex',
  component_group_name: 'Tailwind',
  is_root: false,
  is_nestable: true,
  schema: {
    orientation: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'row',
          name: 'row',
        },
        {
          value: 'col',
          name: 'col',
        },
      ],
      default_value: 'row',
    },
    content: {
      type: 'bloks',
      translatable: false,
    },
    reverse: {
      type: 'boolean',
    },
    justify: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'center',
          name: 'center',
        },
        {
          value: 'start',
          name: 'start',
        },
        {
          value: 'end',
          name: 'end',
        },
        {
          value: 'between',
          name: 'between',
        },
        {
          value: 'around',
          name: 'around',
        },
        {
          value: 'evenly',
          name: 'evenly',
        },
      ],
      default_value: 'start',
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
