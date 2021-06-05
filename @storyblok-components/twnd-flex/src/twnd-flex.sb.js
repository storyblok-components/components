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
  },
};
