## Requirements to use this component
- ...

## Install
```
npm install @storyblok-components/twnd-card --save
```
or
```
yarn add @storyblok-components/twnd-card
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
sb-mig sync --ext twnd-card
```

which will sync twnd-card schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:
```
const TwndCard = require("@storyblok-components/twnd-card/twnd-card.sb");
```

For React part of component
```
import TwndCard from '@storyblok-components/twnd-card`
```


## FAQ
1) ?
