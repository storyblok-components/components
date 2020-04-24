module.exports = {
  name: 'simple-text-block',
  display_name: 'Simple Text Block',
  component_group_name: 'Typography',
  is_root: false,
  is_nestable: true,
  schema: {
    title_size: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: '6',
          name: '6',
        },
        {
          value: '5',
          name: '5',
        },
        {
          value: '4',
          name: '4',
        },
        {
          value: '3',
          name: '3',
        },
        {
          value: '2',
          name: '2',
        },
        {
          value: '1',
          name: '1',
        },
        {
          value: '',
          name: '',
        },
      ],
      default_value: '4',
    },
    title: {
      type: 'text',
    },
    content: {
      type: 'markdown',
      rich_markdown: false,
    },
  },
};
