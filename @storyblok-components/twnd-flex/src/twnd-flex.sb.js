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
          value: 'justify-center',
          name: 'justify-center',
        },
        {
          value: 'justify-start',
          name: 'justify-start',
        },
        {
          value: 'justify-end',
          name: 'justify-end',
        },
        {
          value: 'justify-between',
          name: 'justify-between',
        },
        {
          value: 'justify-around',
          name: 'justify-around',
        },
        {
          value: 'justify-evenly',
          name: 'justify-evenly',
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
