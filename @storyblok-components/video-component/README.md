## Install
```
npm install @storyblok-components/video-component
```
or
```
yarn add @storyblok-components/video-component
```
or using `sb-mig`
```
sb-mig add components @storyblok-components/video-component
```

## Usage
You can immediately use installed components schema with `sb-mig sync components --ext` functionality.

You just need to edit your `storyblok.config.js` and add `'node_modules/@storyblok-components'` which will tell `sb-mig` to look for schema files inside `@storyblok-components` folder.
```
module.exports = {
    ...
    componentsDirectories: ['src', 'storyblok', 'node_modules/@storyblok-components'],
    ...
};

```

then you can just run

```
sb-m sync components video-component --ext
```

which will sync video-component schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:
```
const VideoComponent = require("@storyblok-components/video-component/video-component.sb");
```

For React part of component
```
import VideoComponent from '@storyblok-components/video-component`
```

For CSS, you can import `@import '@storyblok-components/video-component/dist/index';` in your css/scss
