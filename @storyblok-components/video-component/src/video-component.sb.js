module.exports = {
  name: 'video-component',
  display_name: 'Video Component',
  description: 'Youtube or Vimeo url',
  schema: {
    url: {
      type: 'text',
      description: 'Vimeo or youtube video link',
    },
    autoplay: {
      type: 'boolean',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'Video Component',
};
