import SbEditable from 'storyblok-react';

const withEditable = (Component) => (content) =>
  (
    <SbEditable content={content}>
      <Component />
    </SbEditable>
  );

export default withEditable;
