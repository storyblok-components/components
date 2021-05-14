module.exports = {
  name: 'nav-item',
  display_name: 'Navigation item',
  preview_field: 'name',
  is_root: false,
  is_nestable: false,
  component_group_name: 'Content type',
  schema: {
    name: {
      translatable: true,
      type: 'text',
      pos: 0,
    },
    link: {
      type: 'multilink',
      pos: 1,
    },
  },
};
