## Requirements to use this component
- tailwindcss

## Install
```
npm install @storyblok-components/twnd-flex --save
```
or
```
yarn add @storyblok-components/twnd-flex
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
sb-mig sync --ext twnd-flex
```

which will sync twnd-flex schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:
```
const example = require("@storyblok-components/twnd-flex/twnd-flex.sb");
```

For React part of component
```
import example from '@storyblok-components/twnd-flex`
```


## FAQ
1) 
