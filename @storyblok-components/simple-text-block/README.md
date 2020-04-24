## Requirements to use this component
- ...

## Install
```
npm install @storyblok-components/simple-text-block --save
```
or
```
yarn add @storyblok-components/simple-text-block
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
sb-mig sync --ext simple-text-block
```

which will sync simple-text-block schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:
```
const SimpleTextBlock = require("@storyblok-components/simple-text-block/simple-text-block.sb");
```

For React part of component
```
import SimpleTextBlock from '@storyblok-components/simple-text-block`
```


## FAQ
1) ?