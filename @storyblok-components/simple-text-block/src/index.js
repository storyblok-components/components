import ComponentNotFound from './component_not_found';

import SimpleTextBlock from './simple-text-block';

const ComponentList = {
  'simple-text-block': SimpleTextBlock,
};

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export { SimpleTextBlock, ComponentNotFound, Components, ComponentList };
