## Requirements to use this component
- tailwindcss

## Install
```
npm install @storyblok-components/twnd-container --save
```
or
```
yarn add @storyblok-components/twnd-container
```

## Usage
You can immediately use installed components schema with `sb-mig` `sync --ext` functionality.

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
sb-mig sync --ext twnd-container
```

which will sync twnd-container schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:
```
const TailwindContainer = require("@storyblok-components/twnd-container/twnd-container.sb");
```

For React part of component
```
import TailwindContainer from '@storyblok-components/twnd-container`
```


## FAQ
1) ?
