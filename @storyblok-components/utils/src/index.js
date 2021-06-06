import React from 'react';

export { default as withSpacing } from './components/WithSpacingHOC';

// This is HOC which passes all storyblok component list to component itself
// so component can use them inside
// eslint-disable-next-line react/display-name
export const withComponents = (WrappedComponent) => (Components) => (props) =>
  <WrappedComponent {...props} Components={(type) => Components(type)} />;

export const injectScopedInternalComponentList = (
  { components },
  Components
) => {
  let result = {};
  let temp = {};

  components.forEach((element) => {
    temp = {
      ...Object.entries(element).reduce(
        (prev, next) => ({
          ...prev,
          [next[0]]: withComponents(next[1])(Components),
        }),
        {}
      ),
    };

    result = {
      ...result,
      ...temp,
    };
  });

  return result;
};
