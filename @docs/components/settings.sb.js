module.exports = {
  name: 'settings',
  display_name: 'Settings',
  is_root: true,
  is_nestable: false,
  component_group_name: 'Content type',
  schema: {
    main_nav: {
      type: 'bloks',
      pos: 0,
      restrict_components: true,
      component_whitelist: ['nav-item'],
    },
  },
};
